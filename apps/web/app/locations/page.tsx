'use client';
import { Location } from "@repo/ui";
import { useRouter } from "next/navigation";
import styles from "../../styles/index.module.css"

export default function LocationsPage() {
    const router = useRouter()
    return (
        <div className={styles.pageContainer}>
            <Location redirectFunction={router}/>
        </div>
    )
}