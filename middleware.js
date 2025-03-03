import { NextResponse } from "next/server";

export const middleware = (request) => {
  // console.log(request);
  return NextResponse.next();
};

// config za middleware
// export const confih = {
//   matcher: "/news",
// };
