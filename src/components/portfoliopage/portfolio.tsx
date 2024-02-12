import { useEffect, useState } from "react";
import axios from "axios";

type ButtonProps = {
  text: string;
  isChecked?: boolean;
  onSelect: (text: string) => void;
};

const Button = ({ text, isChecked, onSelect }: ButtonProps) => {
  let classes =
    "button text-primary dark:text-white text-[18px] capitalize font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300";
  if (isChecked) classes += " is-checked";

  return (
    <button className={classes} data-filter="*" onClick={() => onSelect(text)}>
      {text}
    </button>
  );
};

type PopupProps = {
  category: string;
  title: string;
  blurb: string;
  blurpImage: string;
  projectType: string;
  client: string;
  techStack: string;
  preview: string;
  description: string;
  image: string;
  onClose: () => void;
};

const PortfolioPopup = (props: PopupProps) => {
  return (
    <div
      className="modal_portfolio active fixed h-screen w-full left-0 top-0 z-[98] opacity-0"
      onClick={props.onClose}
    >
      <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]"></div>
      <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
        <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800 max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
          <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h2 className="text-accent1 text-center font-bold">{props.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
            <div className="space-y-2">
              <p className="dark:text-white flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </span>
                Project :&nbsp;
                <span className="font-medium"> {props.projectType}</span>
              </p>
              <p className="dark:text-white flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-code"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                Languages :&nbsp;
                <span className="font-medium">{props.techStack}</span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="dark:text-white flex items-center mt-2 lg:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Client :&nbsp;{" "}
                <span className="font-medium">{props.client}</span>
              </p>
              <p className="dark:text-white flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </span>
                Preview :&nbsp;
                <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                  <a
                    href={props.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.preview}
                  </a>
                </span>
              </p>
            </div>
          </div>
          <p className="dark:text-white font-normal text-[17px]">
            {props.description}
          </p>
          <div className="pr-3">
            <img
              className="max-w-full h-auto rounded-xl mt-6 mx-auto"
              src={"./assets/images/portfolio/" + props.image}
              alt="portfolio image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type PortfoliosProps = {
  category: string;
  title: string;
  blurb: string;
  blurpImage: string;
  projectType: string;
  client: string;
  techStack: string;
  preview: string;
  description: string;
  image: string;
};

const PortfolioItem = (props: PortfoliosProps) => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const baseUrl = "./assets/images/portfolio/";

  return (
    <div
      className="element-item mb-[30px] w-[50%] lg:w-[33.33%] px-[15px] web portfolio__parent"
      data-category={props.category}
    >
      <div className="relative overflow-hidden">
        <div onClick={() => setDisplayPopup(true)}>
          <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
            <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
              <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-maximize"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </span>
              <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                {props.title}
              </h3>
              <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                {props.blurb}
              </span>
            </div>
          </span>
          <div className="w-full portfolio__image--card">
            <img
              className="w-full transition duration-300"
              src={baseUrl + props.image}
              alt=""
            />
          </div>
        </div>
        {displayPopup ? (
          <PortfolioPopup {...props} onClose={() => setDisplayPopup(false)} />
        ) : null}
      </div>
    </div>
  );
};

type PortfolioData = {
  category: string;
  title: string;
  blurb: string;
  blurpImage: string;
  projectType: string;
  client: string;
  techStack: string;
  preview: string;
  description: string;
  image: string;
};

function addUnique(array: string[], string: string) {
  const ret: string[] = [...array];

  if (ret.indexOf(string) === -1) {
    ret.push(string);
  }

  return ret;
}

function flattenTechStack(array: any[], divider: string) {
  let string = "";

  array.forEach((element, index) => {
    if (index === array.length - 1) {
      string += element.tech;
    } else {
      string += element.tech + divider + " ";
    }
  });

  return string;
}

function composeData(data: any): [PortfolioData[], string[]] {
  const portfolioData: PortfolioData[] = [];
  let categories: string[] = ["Show All"];

  data.forEach((element: any) => {
    portfolioData.push({
      category: element.data.category,
      title: element.data.title,
      blurb: element.data.blurb,
      blurpImage: element.data.blurpImage,
      projectType: element.data.projectType,
      client: element.data.client,
      techStack: flattenTechStack(element.data.techStack, ","),
      preview: element.data.preview,
      description: element.data.description,
      image: element.data.image,
    });

    categories = addUnique(categories, element.data.category);
  });

  return [portfolioData, categories];
}

const SHOW_ALL = "Show All";

const Portfolio = () => {
  const [content, setContent] = useState<PortfolioData[]>();
  const [filter, setFilter] = useState<string[]>();
  const [selectedFilter, setSelectedFilter] = useState(SHOW_ALL);

  const filterContent = (input: PortfolioData[]): PortfolioData[] => {
    return input.filter(
      (elem) => elem.category === selectedFilter || selectedFilter === SHOW_ALL
    );
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://cdn.builder.io/api/v3/content/portfolio?apiKey=7ed7a6172c544c82a6117e0dccdd37a4",
    })
      .then((response) => {
        const [cData, cats] = composeData(response.data.results);
        setContent(cData);
        setFilter(cats);
      })
      .catch((error) => console.error("Error", error));
  }, [window.location.pathname]);

  return (
    <section className="pt-[50px] pb-[40px] lg:pb-[70px]">
      <div className="isotope--filter">
        <div className="button-group filters-button-group flex justify-center flex-wrap gap-[30px]">
          {filter
            ? filter.map((cat) => (
                <Button
                  text={cat}
                  isChecked={cat === selectedFilter}
                  onSelect={(cat) => setSelectedFilter(cat)}
                />
              ))
            : null}
        </div>
        <div className="portfolio__grid flex mt-[50px] mx-[-15px]">
          {content
            ? filterContent(content).map((elem) => <PortfolioItem {...elem} />)
            : null}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
