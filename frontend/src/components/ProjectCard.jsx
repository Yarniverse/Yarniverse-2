export default function ProjectCard({ project }) {
  project = project.id;
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-[#6aa096] left-4 -top-6">
            <img
              src="https://img.icons8.com/ios/50/000000/knitting-ball.png"
              alt="knitting-ball"
            />
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">{project.project_name}</p>
            <div class="flex space-x-2 text-gray-400 text-sm py-1">
              <p>{project.project_description}</p>
            </div>

            <div class="border-t-2"></div>
            <div class="flex justify-center">
              <div class="my-2">
                <p class="font-semibold text-base mb-2">Hook Size</p>
                <div class="text-base text-gray-400 font-semibold">
                  <p>{project.hook_size}mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
