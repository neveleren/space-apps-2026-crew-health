# MediaPipe files bundled for offline use

These files are third-party software, copied unchanged so the camera demonstration works with no internet.

| File | Where it comes from | Licence |
|---|---|---|
| `vision_bundle.mjs`, `wasm/vision_wasm_internal.*`, `wasm/vision_wasm_nosimd_internal.*` | npm package `@mediapipe/tasks-vision` version 1.1.1 (Google), https://www.npmjs.com/package/@mediapipe/tasks-vision | Apache License 2.0 |
| `models/pose_landmarker_lite.task` | https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task (model card: BlazePose GHUM 3D) | Apache License 2.0 |
| `models/face_landmarker.task` | https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task (model cards: MediaPipe Face Mesh V2, Blendshape V2) | Apache License 2.0 |

The full licence text is in `LICENSE-Apache-2.0.txt`.

What Google's model cards say about limits (checked on 2026-11-14):
- BlazePose GHUM 3D: "The model is not intended for human life-critical decisions. The primary intended application is entertainment." Out of scope: several people in one image, people further than about 4 metres, surveillance or identity recognition.
- Face Mesh V2 and Blendshape V2: "This model is not intended for human life-critical decisions." They do not recognise or identify faces and store no unique face representation.

So the camera part of this project is a demonstration of how camera rules can feed the health machine, not a medical device.

Model cards:
- https://storage.googleapis.com/mediapipe-assets/Model%20Card%20BlazePose%20GHUM%203D.pdf
- https://storage.googleapis.com/mediapipe-assets/Model%20Card%20MediaPipe%20Face%20Mesh%20V2.pdf
- https://storage.googleapis.com/mediapipe-assets/Model%20Card%20Blendshape%20V2.pdf
