import CustomLayout from "@/layouts/CustomLayout";

export default function Home() {
  return (
    <CustomLayout>
      <div className="container mx-auto text-center min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Welcome to the GSAP Animated Page</h2>
        <p className="text-lg text-gray-700 mb-6">
          This page is built with Next.js and uses GSAP for animations.
        </p>
        <div
          className="bg-blue-500 text-white text-xl py-4 px-8 rounded-md shadow-md"
        >
          GSAP Animation!
        </div>
        <div className="flex flex-col justify-between items-center gap-10 mt-10">
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 1</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 2</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 3</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 4</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 5</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 6</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 7</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 8</li>
        </div>
      </div>
    </CustomLayout>
  );
}
