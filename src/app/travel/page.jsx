import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mt-4 text-center mb-4 font-bold">
        Youtube channel information
      </h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@PaniBottle"
          className="text-xl hover:text-blue-300 text-blue-700 font-bold"
        >
          빠니보틀 Pani Bottle
        </Link>
        <p className="mb-2">
          세계여행을 하면서 각 나라의 모습을 볼 수 있는 여행 유튜버 빠니보틀
          Pani Bottle
        </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@JBKWAK"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          곽튜브
        </Link>
        <p className="mb-2">
          각 나라 지역탐방과 전통음식을 알아 볼 수 있고 다양한 이야기가 있는
          곽튜브
        </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@Jayworldtraveler"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          여행가 제이 Jay world traveler
        </Link>
        <p className="mb-2">
          여행을 하면서 펼쳐지는 자연 풍경과 도시 풍경을 느낄 수 있고 그의
          브이로그가 담겨있는 여행 유튜버 여행가 제이
        </p>
      </div>
    </>
  )
}
