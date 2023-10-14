import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-center mt-4 mb-4 font-bold">
        Youtube channel information
      </h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@G-movie"
          className="text-xl hover:text-red-300  text-red-700 font-bold"
        >
          지무비 : G Movie
        </Link>
        <p className="mb-2">영화, 드라마 소개</p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@GOMONGTUBE"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          고몽
        </Link>
        <p className="mb-2">영화, 드라마 소개</p>
      </div>
    </>
  )
}
