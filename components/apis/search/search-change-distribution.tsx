import { DistributionEnum } from '../../../enums/distribution.enum';

export default function SearchChangeDistribution({
  distribution,
  setDistribution,
}: any) {
  const handleChange = (val: DistributionEnum) => {
    setDistribution(val);
  };

  return (
    <div className="h-full border border-blue-primary rounded-md flex ">
      <button
        onClick={() => handleChange(DistributionEnum.GRID)}
        className={`h-full w-1/2 flex justify-center items-center  rounded-l-md duration-300 border-r border-blue-primary ${
          distribution === DistributionEnum.GRID && 'bg-blue-100'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#003670"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </button>

      <button
        onClick={() => handleChange(DistributionEnum.LIST)}
        className={`h-full w-1/2 flex justify-center items-center rounded-r-md duration-300 ${
          distribution === DistributionEnum.LIST && 'bg-blue-100'
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.3 5.30405C2.6 5.00405 3 4.90405 3.4 5.10405C3.5 5.10405 3.6 5.20405 3.7 5.30405C3.9 5.50405 4 5.70405 4 6.00405C4 6.30405 3.9 6.50405 3.7 6.70405C3.5 6.90405 3.3 7.00405 3 7.00405H2.8C2.7 6.90405 2.7 6.90405 2.6 6.90405C2.55 6.90405 2.525 6.87905 2.5 6.85405C2.475 6.82905 2.45 6.80405 2.4 6.80405L2.3 6.70405C2.25 6.65405 2.225 6.60405 2.2 6.55405C2.175 6.50405 2.15 6.45405 2.1 6.40405C2 6.30405 2 6.10405 2 6.00405C2 5.90405 2 5.70405 2.1 5.60405C2.1 5.50405 2.2 5.40405 2.3 5.30405L2.3 5.30405ZM8 5.00405C7.4 5.00405 7 5.40405 7 6.00405C7 6.60405 7.4 7.00405 8 7.00405H21C21.6 7.00405 22 6.60405 22 6.00405C22 5.40405 21.6 5.00405 21 5.00405H8ZM8 11.0041H21C21.6 11.0041 22 11.4041 22 12.0041C22 12.6041 21.6 13.0041 21 13.0041H8C7.4 13.0041 7 12.6041 7 12.0041C7 11.4041 7.4 11.0041 8 11.0041ZM21 17.0041H8C7.4 17.0041 7 17.4041 7 18.0041C7 18.6041 7.4 19.0041 8 19.0041H21C21.6 19.0041 22 18.6041 22 18.0041C22 17.4041 21.6 17.0041 21 17.0041ZM3.9 11.6041C3.9 11.5541 3.875 11.5291 3.85 11.5041C3.825 11.4791 3.8 11.4541 3.8 11.4041C3.8 11.3041 3.7 11.3041 3.7 11.3041C3.4 11.0041 3 10.9041 2.6 11.1041C2.55 11.1541 2.5 11.1791 2.45 11.2041C2.4 11.2291 2.35 11.2541 2.3 11.3041L2.2 11.4041C2.2 11.4541 2.175 11.4791 2.15 11.5041C2.125 11.5291 2.1 11.5541 2.1 11.6041C2.1 11.6465 2.1 11.671 2.09233 11.6927C2.08194 11.7221 2.0575 11.7465 2 11.8041V12.0041C2 12.3041 2.1 12.5041 2.3 12.7041C2.5 12.9041 2.7 13.0041 3 13.0041C3.3 13.0041 3.5 12.9041 3.7 12.7041C3.9 12.5041 4 12.3041 4 12.0041V11.8041C4 11.7541 3.975 11.7291 3.95 11.7041C3.925 11.6791 3.9 11.6541 3.9 11.6041ZM2.1 17.6041C2.1 17.5041 2.2 17.4041 2.3 17.3041C2.7 16.9041 3.3 16.9041 3.7 17.3041C3.9 17.5041 4 17.7041 4 18.0041C4 18.3041 3.9 18.5041 3.7 18.7041C3.5 18.9041 3.3 19.0041 3 19.0041C2.7 19.0041 2.5 18.9041 2.3 18.7041C2.1 18.5041 2 18.3041 2 18.0041C2 17.9041 2 17.7041 2.1 17.6041Z"
            fill="#003670"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="5"
            width="20"
            height="15"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.3 5.30405C2.6 5.00405 3 4.90405 3.4 5.10405C3.5 5.10405 3.6 5.20405 3.7 5.30405C3.9 5.50405 4 5.70405 4 6.00405C4 6.30405 3.9 6.50405 3.7 6.70405C3.5 6.90405 3.3 7.00405 3 7.00405H2.8C2.7 6.90405 2.7 6.90405 2.6 6.90405C2.55 6.90405 2.525 6.87905 2.5 6.85405C2.475 6.82905 2.45 6.80405 2.4 6.80405L2.3 6.70405C2.25 6.65405 2.225 6.60405 2.2 6.55405C2.175 6.50405 2.15 6.45405 2.1 6.40405C2 6.30405 2 6.10405 2 6.00405C2 5.90405 2 5.70405 2.1 5.60405C2.1 5.50405 2.2 5.40405 2.3 5.30405L2.3 5.30405ZM8 5.00405C7.4 5.00405 7 5.40405 7 6.00405C7 6.60405 7.4 7.00405 8 7.00405H21C21.6 7.00405 22 6.60405 22 6.00405C22 5.40405 21.6 5.00405 21 5.00405H8ZM8 11.0041H21C21.6 11.0041 22 11.4041 22 12.0041C22 12.6041 21.6 13.0041 21 13.0041H8C7.4 13.0041 7 12.6041 7 12.0041C7 11.4041 7.4 11.0041 8 11.0041ZM21 17.0041H8C7.4 17.0041 7 17.4041 7 18.0041C7 18.6041 7.4 19.0041 8 19.0041H21C21.6 19.0041 22 18.6041 22 18.0041C22 17.4041 21.6 17.0041 21 17.0041ZM3.9 11.6041C3.9 11.5541 3.875 11.5291 3.85 11.5041C3.825 11.4791 3.8 11.4541 3.8 11.4041C3.8 11.3041 3.7 11.3041 3.7 11.3041C3.4 11.0041 3 10.9041 2.6 11.1041C2.55 11.1541 2.5 11.1791 2.45 11.2041C2.4 11.2291 2.35 11.2541 2.3 11.3041L2.2 11.4041C2.2 11.4541 2.175 11.4791 2.15 11.5041C2.125 11.5291 2.1 11.5541 2.1 11.6041C2.1 11.6465 2.1 11.671 2.09233 11.6927C2.08194 11.7221 2.0575 11.7465 2 11.8041V12.0041C2 12.3041 2.1 12.5041 2.3 12.7041C2.5 12.9041 2.7 13.0041 3 13.0041C3.3 13.0041 3.5 12.9041 3.7 12.7041C3.9 12.5041 4 12.3041 4 12.0041V11.8041C4 11.7541 3.975 11.7291 3.95 11.7041C3.925 11.6791 3.9 11.6541 3.9 11.6041ZM2.1 17.6041C2.1 17.5041 2.2 17.4041 2.3 17.3041C2.7 16.9041 3.3 16.9041 3.7 17.3041C3.9 17.5041 4 17.7041 4 18.0041C4 18.3041 3.9 18.5041 3.7 18.7041C3.5 18.9041 3.3 19.0041 3 19.0041C2.7 19.0041 2.5 18.9041 2.3 18.7041C2.1 18.5041 2 18.3041 2 18.0041C2 17.9041 2 17.7041 2.1 17.6041Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <rect width="24" height="24" fill="#003670" />
          </g>
        </svg>
      </button>
    </div>
  );
}
