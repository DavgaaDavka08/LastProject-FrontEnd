import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full bg-[#4338CA] mt-8 py-10 px-6 sm:px-2">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col sm:flex-row justify-between gap-8 text-[14px] text-white">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-2">
            <Image src="/film.svg" alt="Logo" width={24} height={24} />
            <p className="text-lg font-semibold italic">Movie Z</p>
          </div>
          <p className="mt-2">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Contact Information</p>
          <div className="flex items-center gap-2">
            <Image src="/mail.svg" alt="Email" width={18} height={18} />
            <div>
              <p className="font-medium">Email:</p>
              <p className="font-normal">support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/phone.svg" alt="Phone" width={18} height={18} />
            <div>
              <p className="font-medium">Phone:</p>
              <p className="font-normal">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">Follow us</p>
          <div className="flex flex-col gap-2">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
