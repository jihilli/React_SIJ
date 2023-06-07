const Member = ({name, gender, singer, song})=> {
    return (
        <div className="member-border">
            <p className="name">{name}</p>
            <p>성별 : {gender}</p>
            <p>좋아하는 음악: {singer} - {song} </p>
        </div>
    );
}

export default Member;