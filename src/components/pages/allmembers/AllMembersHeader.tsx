import Image from "next/image";

export function ProfileHeader() {
  return (
    <div
      className="flex justify-center relative h-54 rounded-[8px] w-full"
    >
      <div
        className="h-52 bg-[#001C5DCC] rounded-[8px] relative w-235"
        style={{ padding: "12px" }}
      >
        <div className="absolute inset-0 bg-[url('https://github.com/shadcn.png')] bg-cover bg-center blur-lg opacity-50" />
        <div className="relative z-10 h-full">
          <div className="absolute bottom-6 left-13 transform translate-y-1/2 flex items-end gap-4">
            <div className="flex items-center justify-center h-23 w-23 rounded-full">
              <Image
                src="https://github.com/shadcn.png"
                alt="Henok Assefa"
                width={92} // Adjust width (23 * 4 = 92px)
                height={92} // Adjust height (23 * 4 = 92px)
                className="flex items-center justify-center h-23 w-23 rounded-full object-cover"
              />
            </div>
            <div className="flex gap-5 text-white" style={{ marginBottom: "22px" }}>
              <div>
                <h2 className="font-semibold text-2xl">Henok Assefa</h2>
                <p className="text-[16px] opacity-90">Full-Stack Developer</p>
              </div>
              <p className="flex items-end text-sm opacity-90">last seen recently</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
