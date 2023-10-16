const PageFooter = () => {
  return (
    <>
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bottom-0">
        {/* <!-- Grid --> */}
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-3">
            <p className="text-gray-500">
              We're part of the{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                href="#"
              >
                Htmlstream
              </a>{" "}
              family.
            </p>
            <p className="text-gray-500">
              © Preline. 2022 Htmlstream. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
