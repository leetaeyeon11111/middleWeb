import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl mb-10 mt-6 text-center font-bold">
        YouTube channel recommendation site
      </h1>
      <div className="mb-4 bg-green-700 p-4 m-4 rounded-lg hover:bg-green-200">
        <Link
          href="https://www.youtube.com/@TraversyMedia"
          className="text-xl text-black hover:text-blue-500 font-bold"
        >
          사이트를 제작하면서 도움이 되었던 Traversy Media
        </Link>
        <p className="mb-2">
          Traversy Media features the best online web development and
          programming tutorials for all of the latest web technologies from the
          building blocks of HTML, CSS & JavaScript to frontend frameworks like
          React and Vue to backend technologies like Node.js, Python and PHP
        </p>
      </div>

      <div className="mb-4 bg-gray-400 p-4 m-4 rounded-lg">
        <Link href="/study" className="text-xl text-green-300 font-bold">
          공부 분야
        </Link>
        <p className="mb-2">기초영어, 기초수학 등 여러가지 학문 공부 </p>
      </div>

      <div className="mb-4 bg-gray-400 p-4 m-4 rounded-lg">
        <Link href="/travel" className="text-xl text-green-300 font-bold">
          여행 유튜브 분야
        </Link>
        <p className="mb-2"> 여행 유튜버 추천 목록 </p>
      </div>

      <div className="mb-4 bg-gray-400 p-4 m-4 rounded-lg">
        <Link href="/music" className="text-xl text-green-300 font-bold">
          음악 추천 유튜브 채널
        </Link>
        <p className="mb-2"> 다양한 분야의 음악 채널 목록 </p>
      </div>

      <div className="mb-4 bg-gray-400 p-4 m-4 rounded-lg">
        <Link href="/move" className="text-xl text-green-300 font-bold">
          영화,드라마 소개 유튜브 채널
        </Link>
        <p className="mb-2"> 숨겨진 영화,드라마 추천</p>
      </div>

      <div className="mb-4 bg-gray-400 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/leetaeyeon11111/middleWeb"
          className="text-xl text-black font-bold"
        >
          leetaeyeon11111 middleWeb GitHub page
        </Link>
      </div>
    </>
  )
}
