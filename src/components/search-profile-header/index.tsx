import { ProfileImage } from "../profile-image";
import { SearchInput } from "../search-input";

export const SearchProfileHeader = () => {
  return (
    <div className="sticky top-0 z-30 flex h-14 items-center gap-4 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SearchInput />
      <ProfileImage />
    </div>
  );
};
