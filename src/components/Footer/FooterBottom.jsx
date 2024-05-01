import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

const FooterBottom = () => {
  const { copyright, other_links } = data["section-footer"];
  return (
    <div className='flex gap-10 flex-wrap items-center mt-[90px]'>
      <p className='text-[14px]'>{`© ${new Date().getFullYear()} ${copyright}`}</p>
      <ul className='flex  items-center gap-5 '>
        {other_links.map((link) => (
          <li key={uuidv4()} className='text-[12px]'>
            <a href={link.href} title={link.title}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterBottom;
