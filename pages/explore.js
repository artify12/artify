import Header from "../layouts/Header";
import HotSection from "../components/Explore/HotSection";
import BannerSection from "../components/Explore/BannerSection";
import {
  db,
  doc,
  getDoc,
  getDownloadURL,
  listAll,
  ref,
  collection,
  getDocs,
  storage,
} from "../firebase/index";
import { useEffect, useState, useMemo } from "react";
import HonorableMentions from "../components/Explore/HonorableMentions";
import Footer from "../layouts/Footer";

export default function Explore() {
  const [hotSection, setHotSection] = useState([]);
  const [bannerImage, setBannerImage] = useState();
  const [imageCollection, setImageCollection] = useState([]);
  const folderNames = ["banner/", "hot-section/"];

  const docRef = doc(db, "imageData", "SF");
  const docSnap = getDoc(docRef);

  // useEffect(() => {
  //   console.log(imageCollection);
  //   console.log("Banner Image:", bannerImage);
  // }, [imageCollection, bannerImage]);

  const getImageCollection = async () => {
    const querySnapshot = await getDocs(collection(db, "ImageData"));
    querySnapshot.forEach((doc) => {
      setImageCollection((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  const memoizedImageCollection = useMemo(() => {
    getImageCollection().then((r) => {});
  }, []);

  const getImages = (imageRef) => {
    const listRef = ref(storage, imageRef);
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {});
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            const obj = { folder: imageRef, url: url };
            if (imageRef === "hot-section/") {
              setHotSection((prev) => [...prev, obj]);
            }
            if (imageRef === "banner/") {
              setBannerImage(url);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const memoizedStorage = useMemo(() => {
    for (let i = 0; i < folderNames.length; i++) {
      getImages(folderNames[i]);
    }
  }, []);

  return (
    <>
      <div className="explore__section" style={{ background: "#fff" }}>
        <Header />
        <BannerSection
          // banner={
          //   "https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          // }
          banner={bannerImage}
        />
        <HotSection files={hotSection} />
        <HonorableMentions collection={imageCollection} />
        <Footer />
      </div>
    </>
  );
}
