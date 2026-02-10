import mod from "../__index.module.scss";

const InnerPopupContent = () => {

    return <>
        <div className={mod.innerPopupContent}>
            {/** Edit */}
            <button className={mod.btn_edit}>
                <i class="mdi mdi-square-edit-outline"></i>
            </button>
            
            {/** Starring */}
            <button className={mod.btn_starring}>
                <i class="mdi mdi-star"></i>
            </button>
            
            {/** Set Status */}
            <button className={mod.btn_status_done}>
                <i class="mdi mdi-cloud-check-variant"></i>
            </button>
            <button className={mod.btn_status_undone}>
                <i class="mdi mdi-clock-outline"></i>
            </button>
            {/** Sharing */}
            <button className={mod.btn_share}>
                <i class="mdi mdi-share"></i>
            </button>
            {/** Delete */}
            <button className={mod.btn_delete}>
                <i class="mdi mdi-delete-empty"></i>
            </button>
        </div>
    </>;
}

export default InnerPopupContent;