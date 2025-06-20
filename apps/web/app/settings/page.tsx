import { SettingsComponent } from "@repo/ui";
import styles from "../../styles/index.module.css"

export default function SettingsPage() {
    return (
        <div className={styles.pageContainer}>
            <SettingsComponent />
        </div>
    )
}