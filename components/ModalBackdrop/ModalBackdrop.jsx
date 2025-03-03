"use client";

import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const { back } = useRouter();
  return <div className="modal-backdrop" onClick={back} />;
};

export default ModalBackdrop;
