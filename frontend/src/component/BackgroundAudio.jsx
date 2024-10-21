const BackgroundAudio = () => {
    useEffect(() => {
        const audio = new Audio();
        audio.src = backgroundMusic; // 기본 MP3 파일 경로
        audio.loop = true;
        audio.volume = 0.5;

        audio.play();

        return () => {
            audio.pause();
        };
    }, []);

    return null;
};