import "./../css/EditDeleteButtons.css";
import editIcon from "./../images/edit-icon.png";
import deleteIcon from "./../images/delete-icon.png";

const EditDeleteButtons = (props) => {
    return (
        <div className="edit-delete-buttons">
            <img src={editIcon} onClick={props.openEditDialog}/>
            <img src={deleteIcon} onClick={props.openDeleteDialog}/>
        </div>
    );
};

export default EditDeleteButtons;