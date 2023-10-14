import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mt-4 text-center mb-4 font-bold">
        Youtube channel information
      </h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@sosoplaylist"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          쏘플 soso playlist
        </Link>
        <p className="mb-2">
          우리가 몰랐던 명곡들을 추천해주고 다양한 시각적 뮤비를 넣어 음악에
          몰입하게 해주는 채널 쏘플 soso playlist
        </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@alpha_music"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          알파
        </Link>
        <p className="mb-2">
          다양한 힙합,랩 노래를 들을 수 있는 힙합 전용 채널
        </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@utan2"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          우탄이차트
        </Link>
        <p className="mb-2">
          광고 없이 4시간동안 인기차트 음악들을 들을 수 있는 유튜브 채널
        </p>
      </div>
    </>
  )
}
