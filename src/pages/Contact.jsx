import Heading1 from "../components/Heading1";
import Form from "../components/form/Form";
import cookingImg from "../assets/cooking-contact-img.jpg";
import cookingImg2 from "../assets/contact-img2.jpg";

const Contact = () => {
  return (
    <div className="font-krub">
      <div className="bg-[url('../assets/contact-img.png')] bg-center bg-cover bg-no-repeat w-full rounded-[35px] mt-16 px-4 py-16 sm:px-8 md:px-20 md:py-32">
        <Heading1
          className="text-start max-w-[200px] custom400px:max-w-[300px] md:max-w-[400px]"
          title="Get in Touch with Us"
          position="middle"
          highlight="with"
        />
      </div>
      <div className="flex flex-col-reverse gap-4 my-4 sm:my-8 md:gap-16 xl:my-16 xl:flex-row">
        <div>
          <img
            src={cookingImg}
            alt="cooking"
            className="rounded-[25px] object-cover w-full max-h-[300px] xl:w-[1800px] xl:h-full xl:max-h-[500px]"
          />
        </div>
        <div>
          <p className="text-customDarkGray list-disc mb-4 md:text-xl xl:text-2xl">
            Connect with culinary excellence effortlessly. Whether you have a
            burining question about a recipe or want to share your cookig
            triumphs, our dedicated team is just a message away for our
            food-loving community.
          </p>
          <div className="flex flex-wrap justify-between gap-8 mt-4 xl:mt-2">
            <div>
              <p className="text-customDarkGray list-disc my-2 md:text-xl xl:text-2xl">
                Phone
              </p>
              <h3 className="text-customBlack font-bold md:text-2xl xl:text-3xl">
                (+373) 67844731
              </h3>
            </div>
            <div>
              <p className="text-customDarkGray list-disc my-2 md:text-xl xl:text-2xl">
                Email Address
              </p>
              <h3 className="text-customBlack font-bold md:text-2xl xl:text-3xl">
                flavoriz@gmail.com
              </h3>
            </div>
            <div>
              <p className="text-customDarkGray list-disc my-2 md:text-xl xl:text-2xl">
                Location
              </p>
              <h3 className="text-customBlack font-bold md:text-2xl xl:text-3xl">
                str. Ismail 20/3, Chisinau, Moldova
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Heading1
          title="Send Us A Message"
          position="middle"
          highlight="Us"
          className="text-start"
        />
        <div className="flex flex-col items-stretch justify-between gap-4 md:gap-16 xl:flex-row">
          <Form />
          <img
            src={cookingImg2}
            alt="food"
            className="rounded-[25px] object-cover w-full max-h-[300px] xl:max-w-[700px] xl:h-full xl:min-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
