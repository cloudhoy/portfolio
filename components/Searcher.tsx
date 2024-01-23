"use client";

import { useCallback } from "react";
import { Search, X } from "react-feather";

export type SearcherProps = {
  className?: string;
};

const Searcher = ({ className }: SearcherProps) => {
  const openModal = useCallback(() => {
    const modal = document.getElementById(
      "search_modal"
    ) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  }, []);

  return (
    <>
      <button className={`btn ${className}`} onClick={openModal}>
        <Search />
      </button>
      <dialog id="search_modal" className="modal modal-top">
        <div className="modal-box p-4">
          <div className="flex gap-1">
            <input
              className="input input-bordered grow"
              type="search"
              name="search"
              placeholder="Search"
            />
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-square btn-ghost">
                <X />
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Searcher;
