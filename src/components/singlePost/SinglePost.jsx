import './singlepost.css'

export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>DEPR</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quod neque ipsa dolor dolores. 
                    Quia animi tempore, quibusdam eos laboriosam repellat? Tempora ullam nihil obcaecati. 
                    Corporis accusantium exercitationem quibusdam possimus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quod neque ipsa dolor dolores. 
                    Quia animi tempore, quibusdam eos laboriosam repellat? Tempora ullam nihil obcaecati. 
                    Corporis accusantium exercitationem quibusdam possimus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quod neque ipsa dolor dolores. 
                    Quia animi tempore, quibusdam eos laboriosam repellat? Tempora ullam nihil obcaecati. 
                    Corporis accusantium exercitationem quibusdam possimus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quod neque ipsa dolor dolores. 
                    Quia animi tempore, quibusdam eos laboriosam repellat? Tempora ullam nihil obcaecati. 
                    Corporis accusantium exercitationem quibusdam possimus?</p>
            </div>
        </div>
    )
}
