import React, { useMemo, useState } from "react";
// useCallback ลดการ re-render โดยไม่จำเป็น
export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [someValue, setSomeValue] = useState(0);

  const getTimestamp = () => new Date().getTime();

  const numberWithoutMemo = getTimestamp();

  const getNumberWithMemo = useMemo(() => {
    return getTimestamp();
  }, [someValue]);

  return (
    <>
      <p>แบบไม่ใช้ useMemo: {numberWithoutMemo}</p>
      <hr />
      <p>แบบใช้ useMemo: {getNumberWithMemo}</p>
      <hr />
      ทดลองเปลี่ยนค่า (Number): {number}
      <br />
      <button
        onClick={() => {
          setNumber((prev) => ++prev);
        }}
      >
        เพิ่ม (+)
      </button>
      <button
        onClick={() => {
          setNumber((prev) => --prev);
        }}
      >
        ลด (-)
      </button>
      <hr />
      ทดลองเปลี่ยนค่า (Some value): {someValue}
      <br />
      <button
        onClick={() => {
          setSomeValue((prev) => ++prev);
        }}
      >
        เพิ่ม (+)
      </button>
      <button
        onClick={() => {
          setSomeValue((prev) => --prev);
        }}
      >
        ลด (-)
      </button>
    </>
  );
}
