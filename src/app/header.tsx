import Link from "next/link";
import Image from "next/image";

type Params = {
  category: string;
};

const Header = ({ category }: Params) => {
  const borderColor = () => {
    if (category == "Front") {
      return "max-w-[1600px] h-[85px] mx-auto items-center border-b-2 border-red";
    } else if (category == "Back") {
      return "max-w-[1600px] h-[85px] mx-auto items-center border-b-2 border-green";
    } else if (category == "CS/DTS") {
      return "max-w-[1600px] h-[85px] mx-auto items-center border-b-2 border-yellow";
    } else if (category == "ML/DL") {
      return "max-w-[1600px] h-[85px] mx-auto items-center border-b-2 border-blue";
    }
  };
  return (
    <div className={borderColor()}>
      <table className="w-[100%] h-[85px]">
        <tbody>
          <tr>
            <td className="w-[700px] h-[85px]">
              <Link href="/">
                <div className="inline-block align-middle">
                  <Image
                    src="/favicon.ico"
                    width={80}
                    height={80}
                    alt="gdsc-logo"
                  />
                </div>
                <div className="ml-2 inline-block text-xl">
                  Google Developer Student Clubs
                </div>
              </Link>
            </td>
            <td className="text-right">
              <HeaderButton text="Front" href="/tts/ui-ux" />
              <HeaderButton text="Back" href="/tts/ci-cd" />
              <HeaderButton text="ML/DL" href="/tts/overfitting-underfitting" />
              <HeaderButton text="공통" href="/tts/http-method" />
            </td>
            <td className="text-right">
              <HeaderButton
                text="Solution Chanllenge"
                href="https://pineapple-tiglon-ff5.notion.site/GDSC-52ea384df18041e5adc51396fa4be294?pvs=4"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;

type Prop = {
  text: string;
  href: string;
};

export function HeaderButton({ text, href }: Prop) {
  return (
    <div className="my-4 mx-2 inline-block">
      <Link
        href={href}
        className="text-xl hover:text-veriperi md:px-5 px-2 py-2.5 text-center"
      >
        {text}
      </Link>
    </div>
  );
}
