import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";

const Learning: NextPage = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Learnings </title>
        <meta name="description" content={`Learnings`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Learnings"} />
        <meta name="description" content={`Learnings`} />
        <link rel="canonical" href={"https://www.bharathloganathan.dev"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.bharathloganathan.dev"} />
        <meta property="og:site_name" content="Bharath Loganathan" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
        <h2 className="lg:text-5xl font-bold leading-tight text-white text-3xl">
          Continuous Learning
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
          Topics and skills I am currently exploring.
        </p>

        <div className="mt-6 space-y-6">
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-3">Deep Learning & Neural Networks</h3>
            <p className="text-sm text-gray-400 mb-3">
              Exploring CNN architectures, transfer learning, and model optimization for computer vision tasks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">PyTorch</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">TensorFlow</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">CNNs</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Transfer Learning</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
            <p className="text-sm text-gray-400 mb-3">
              Building real-time detection and recognition systems using YOLO, OpenCV, and MediaPipe.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">YOLO</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">OpenCV</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">MediaPipe</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Object Detection</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-3">Data Science & Analysis</h3>
            <p className="text-sm text-gray-400 mb-3">
              Working with real datasets, data cleaning, visualization, and building end-to-end ML pipelines.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Pandas</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">NumPy</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Streamlit</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Data Visualization</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-3">Cloud & Deployment</h3>
            <p className="text-sm text-gray-400 mb-3">
              Learning cloud services for hosting, storage, and deploying ML models and web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">AWS</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Firebase</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">S3</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Model Deployment</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-3">Mobile Development</h3>
            <p className="text-sm text-gray-400 mb-3">
              Building cross-platform mobile apps with Flutter, integrating maps and real-time features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Flutter</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Dart</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Maps API</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Cross-Platform</span>
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Learning;
