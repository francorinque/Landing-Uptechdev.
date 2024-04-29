import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const Industries = () => {
  const { title, industries } = data["section-two"];

  return (
    <div>
      <h2 className='subtitle font-playfair text-center'>{title}</h2>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-5  gap-4 place-items-center'>
        {industries.map(({ url, alt, title }) => (
          <img src={url} alt={alt} title={title} />
        ))}
      </div>
    </div>
  );
};
export default Industries;
