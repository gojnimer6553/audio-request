/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionData, useSubmit } from "@remix-run/react";
import { useAudioRecorder } from "@sarafhbk/react-audio-recorder";

const AudioRecorderComponent = () => {
  const data = useActionData<any>();
  const submit = useSubmit();
  const {
    audioResult,
    timer,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    errorMessage,
  } = useAudioRecorder();
  useActionData();
  return (
    <>
      {JSON.stringify(data)}
      <div>
        <audio controls src={audioResult} />
        <p>
          Status : <b>{status}</b>
        </p>
        <p>
          Error Message : <b>{errorMessage}</b>
        </p>
        <div>
          <p>{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
          <div>
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>
            <button onClick={pauseRecording}>Pause</button>
            <button onClick={resumeRecording}>Resume</button>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          const data = new FormData();
          data.append("file", audioResult);
          console.log(data, audioResult, data.get("file"));

          submit(data, {
            action: "/test",
            method: "post",
            encType: "multipart/form-data",
          });
        }}
      >
        enviar
      </button>
    </>
  );
};

export default AudioRecorderComponent;
