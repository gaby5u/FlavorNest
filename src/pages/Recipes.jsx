import Heading1 from "../components/Heading1";
import CategoryButton from "../components/CategoryButton";
import GetRecipesbyCategory from "../api/GetRecipesbyCategory";
import GetRecipeIcon from "../functions/GetRecipeIcon";
import { useEffect } from "react";

const Recipes = () => {
  const categories = GetRecipesbyCategory();

  return (
    <div>
      <div className="bg-[url('../assets/bg-recipe.png')] bg-center bg-cover bg-no-repeat w-full rounded-[35px] mt-16 px-4 py-16 sm:px-8 md:px-20">
        <Heading1
          className="text-start max-w-[500px]"
          title="Explore Culinary Insights"
          position="middle"
          highlight="Culinary"
        />
      </div>
      <div className="font-krub my-12 sm:my-8 xl:my-16">
        <Heading1 title="What to Cook?" position="middle" highlight="Cook" />
        <div className="flex items-center justify-center gap-4 flex-wrap my-8">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              icon={GetRecipeIcon(category.strCategory)}
              title={category.strCategory}
            />
          ))}
          {/* <CategoryButton
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="40" height="40" fill="url(#pattern0_335_23)" />
                <defs>
                  <pattern
                    id="pattern0_335_23"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_335_23"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_335_23"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            }
            title="Main Courses"
          />
          <CategoryButton
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" fill="url(#pattern0_335_45)" />
                <defs>
                  <pattern
                    id="pattern0_335_45"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_335_45"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_335_45"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            }
            title="Desserts & Sweets"
          />
          <CategoryButton
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" fill="url(#pattern0_335_48)" />
                <defs>
                  <pattern
                    id="pattern0_335_48"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_335_48"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_335_48"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            }
            title="Side dishes"
          />
          <CategoryButton
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" fill="url(#pattern0_337_22)" />
                <defs>
                  <pattern
                    id="pattern0_337_22"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_337_22"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_337_22"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            }
            title="Appetizers"
          />
          <CategoryButton
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" fill="url(#pattern0_339_27)" />
                <defs>
                  <pattern
                    id="pattern0_339_27"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_339_27"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_339_27"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            }
            title="Snacks"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
