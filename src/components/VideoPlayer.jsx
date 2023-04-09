const VideoPlayer = (props) => {
    return (
        <div>
            <div className='absolute bg-gray-500'>
                <iframe className='' src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default VideoPlayer; 