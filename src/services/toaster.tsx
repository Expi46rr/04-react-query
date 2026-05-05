import toast from "react-hot-toast";

export const NoFoundError = () => {
  toast.error("No movies found for your request.");
};

export const EmptyFieldError = () => {
  toast.error("Please enter your search query.");
};
