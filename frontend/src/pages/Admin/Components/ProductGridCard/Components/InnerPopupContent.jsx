import mod from "../__index.module.scss";

const InnerPopupContent = ({ onClosePopup }) => {

    const editFunc = (e) => {
        e.stopPropagation();
        onClosePopup();
    }
    const starFunc = (e) => {
        e.stopPropagation();
        onClosePopup();

    }
    const setDoneFunc = (e) => {
        e.stopPropagation();
        onClosePopup();

    }
    const setUndoneFunc = (e) => {
        e.stopPropagation();
        onClosePopup();

    }
    const shareFunc = (e) => {
        e.stopPropagation();
        onClosePopup();

    }
    const deleteFunc = (e) => {
        e.stopPropagation();
        onClosePopup();

    }

    return <>
        <div className={mod.innerPopupContent}>
            {/** Edit */}
            <button className={mod.btn_edit} onClick={editFunc}>
                <i class="mdi mdi-square-edit-outline"></i>
            </button>
            
            {/** Starring */}
            <button className={mod.btn_starring} onClick={starFunc}>
                <i class="mdi mdi-star"></i>
            </button>
            
            {/** Set Status */}
            <button className={mod.btn_status_done} onClick={setDoneFunc}>
                <i class="mdi mdi-cloud-check-variant"></i>
            </button>
            <button className={mod.btn_status_undone} onClick={setUndoneFunc}>
                <i class="mdi mdi-clock-outline"></i>
            </button>
            {/** Sharing */}
            <button className={mod.btn_share} onClick={shareFunc}>
                <i class="mdi mdi-share"></i>
            </button>
            {/** Delete */}
            <button className={mod.btn_delete} onClick={deleteFunc}>
                <i class="mdi mdi-delete-empty"></i>
            </button>
        </div>
    </>;
}

export default InnerPopupContent;