import { Loader2 } from "lucide-react";
import styles from "@/components/Loader/styles.module.css";
export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Loader2 className="animate-spin h-56 w-56 text-gray-300" />
    </div>
  );
};
