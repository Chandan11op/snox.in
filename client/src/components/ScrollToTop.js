import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Navigate to the top of a page so that the scroll position isn't persisted between pages. Use this instead of React Dom's build-in @see {@link useNavigate}. */
export default function ScrollToTop(){
  const {pathname} = useLocation();

  useEffect(
    ()=>{
        window.scrollTo(0,0);
    },
    [pathname]
  );

  return null;
};