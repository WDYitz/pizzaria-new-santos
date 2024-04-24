import { ProfileImage } from "./profile-image";
import { SearchInput } from "./search-input";

export const SearchProfileHeader = ({
  hasSearchInput,
  pageTitle,
  pageDescription,
}: {
  hasSearchInput?: boolean;
  pageTitle: string;
  pageDescription?: string;
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mr-2 sm:static sm:h-auto sm:border-0 sm:bg-transparent ">
      <div>
        <h2 className="text-[24px]">{pageTitle}</h2>
        <h3 className="text-slate-400">{pageDescription}</h3>
      </div>
      <div className="flex gap-4">
        {hasSearchInput ? <SearchInput /> : null}
        <ProfileImage/>
      </div>
    </div>
  );
};

/* flex flex-col h-14 */
