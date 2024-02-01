export enum Track{
    LASER,
}
export class Audio{
    
    public static play(track : Track){
        switch (track) {
            case Track.LASER:
                const laserTrack = <HTMLAudioElement>document.querySelector("audio#audio_laser");
                if(laserTrack){
                    const cloneSound = <HTMLAudioElement>laserTrack.cloneNode();
                    cloneSound.play();
                }
                else
                {
                    throw Error("Laser track tag not found");
                }
                break;
            default:
                break;
        }
    }

}