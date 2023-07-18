import React from "react";
import { BiPlus } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <svg
          width="149"
          height="20"
          viewBox="0 0 149 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33331 3.33334V14.7619C3.33331 15.2671 3.53399 15.7516 3.8912 16.1088C4.24842 16.466 4.7329 16.6667 5.23807 16.6667H16.1905M6.19046 10.9524V13.8095M9.99998 8.09525V13.8095M13.8095 5.23811V13.8095"
            stroke="#606060"
            strokeWidth="0.952381"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.696 8.412C26.744 7.668 27.028 7.088 27.548 6.672C28.076 6.256 28.748 6.048 29.564 6.048C30.124 6.048 30.608 6.148 31.016 6.348C31.424 6.548 31.732 6.82 31.94 7.164C32.148 7.508 32.252 7.896 32.252 8.328C32.252 8.824 32.12 9.248 31.856 9.6C31.592 9.952 31.276 10.188 30.908 10.308V10.356C31.38 10.5 31.748 10.764 32.012 11.148C32.276 11.524 32.408 12.008 32.408 12.6C32.408 13.072 32.3 13.492 32.084 13.86C31.868 14.228 31.548 14.52 31.124 14.736C30.7 14.944 30.192 15.048 29.6 15.048C28.736 15.048 28.024 14.828 27.464 14.388C26.912 13.94 26.616 13.3 26.576 12.468H27.896C27.928 12.892 28.092 13.24 28.388 13.512C28.684 13.776 29.084 13.908 29.588 13.908C30.076 13.908 30.452 13.776 30.716 13.512C30.98 13.24 31.112 12.892 31.112 12.468C31.112 11.908 30.932 11.512 30.572 11.28C30.22 11.04 29.676 10.92 28.94 10.92H28.628V9.792H28.952C29.6 9.784 30.092 9.676 30.428 9.468C30.772 9.26 30.944 8.932 30.944 8.484C30.944 8.1 30.82 7.796 30.572 7.572C30.324 7.34 29.972 7.224 29.516 7.224C29.068 7.224 28.72 7.34 28.472 7.572C28.224 7.796 28.076 8.076 28.028 8.412H26.696ZM37.229 6.66C38.117 6.66 38.893 6.832 39.557 7.176C40.229 7.512 40.745 8 41.105 8.64C41.473 9.272 41.657 10.012 41.657 10.86C41.657 11.708 41.473 12.444 41.105 13.068C40.745 13.692 40.229 14.172 39.557 14.508C38.893 14.836 38.117 15 37.229 15H34.505V6.66H37.229ZM37.229 13.884C38.205 13.884 38.953 13.62 39.473 13.092C39.993 12.564 40.253 11.82 40.253 10.86C40.253 9.892 39.993 9.136 39.473 8.592C38.953 8.048 38.205 7.776 37.229 7.776H35.873V13.884H37.229ZM46.634 10.812C46.634 9.996 46.822 9.264 47.198 8.616C47.582 7.968 48.098 7.464 48.746 7.104C49.402 6.736 50.118 6.552 50.894 6.552C51.782 6.552 52.57 6.772 53.258 7.212C53.954 7.644 54.458 8.26 54.77 9.06H53.126C52.91 8.62 52.61 8.292 52.226 8.076C51.842 7.86 51.398 7.752 50.894 7.752C50.342 7.752 49.85 7.876 49.418 8.124C48.986 8.372 48.646 8.728 48.398 9.192C48.158 9.656 48.038 10.196 48.038 10.812C48.038 11.428 48.158 11.968 48.398 12.432C48.646 12.896 48.986 13.256 49.418 13.512C49.85 13.76 50.342 13.884 50.894 13.884C51.398 13.884 51.842 13.776 52.226 13.56C52.61 13.344 52.91 13.016 53.126 12.576H54.77C54.458 13.376 53.954 13.992 53.258 14.424C52.57 14.856 51.782 15.072 50.894 15.072C50.11 15.072 49.394 14.892 48.746 14.532C48.098 14.164 47.582 13.656 47.198 13.008C46.822 12.36 46.634 11.628 46.634 10.812ZM60.2713 8.28C60.7753 8.28 61.2233 8.388 61.6153 8.604C62.0153 8.82 62.3273 9.14 62.5513 9.564C62.7833 9.988 62.8993 10.5 62.8993 11.1V15H61.5433V11.304C61.5433 10.712 61.3953 10.26 61.0993 9.948C60.8033 9.628 60.3993 9.468 59.8873 9.468C59.3753 9.468 58.9673 9.628 58.6633 9.948C58.3673 10.26 58.2193 10.712 58.2193 11.304V15H56.8513V6.12H58.2193V9.156C58.4513 8.876 58.7433 8.66 59.0953 8.508C59.4553 8.356 59.8473 8.28 60.2713 8.28ZM64.6682 11.664C64.6682 11 64.8042 10.412 65.0762 9.9C65.3562 9.388 65.7322 8.992 66.2042 8.712C66.6842 8.424 67.2122 8.28 67.7882 8.28C68.3082 8.28 68.7602 8.384 69.1442 8.592C69.5362 8.792 69.8482 9.044 70.0802 9.348V8.388H71.4602V15H70.0802V14.016C69.8482 14.328 69.5322 14.588 69.1322 14.796C68.7322 15.004 68.2762 15.108 67.7642 15.108C67.1962 15.108 66.6762 14.964 66.2042 14.676C65.7322 14.38 65.3562 13.972 65.0762 13.452C64.8042 12.924 64.6682 12.328 64.6682 11.664ZM70.0802 11.688C70.0802 11.232 69.9842 10.836 69.7922 10.5C69.6082 10.164 69.3642 9.908 69.0602 9.732C68.7562 9.556 68.4282 9.468 68.0762 9.468C67.7242 9.468 67.3962 9.556 67.0922 9.732C66.7882 9.9 66.5402 10.152 66.3482 10.488C66.1642 10.816 66.0722 11.208 66.0722 11.664C66.0722 12.12 66.1642 12.52 66.3482 12.864C66.5402 13.208 66.7882 13.472 67.0922 13.656C67.4042 13.832 67.7322 13.92 68.0762 13.92C68.4282 13.92 68.7562 13.832 69.0602 13.656C69.3642 13.48 69.6082 13.224 69.7922 12.888C69.9842 12.544 70.0802 12.144 70.0802 11.688ZM75.105 9.348C75.305 9.012 75.569 8.752 75.897 8.568C76.233 8.376 76.629 8.28 77.085 8.28V9.696H76.737C76.201 9.696 75.793 9.832 75.513 10.104C75.241 10.376 75.105 10.848 75.105 11.52V15H73.737V8.388H75.105V9.348ZM80.4185 9.504V13.164C80.4185 13.412 80.4745 13.592 80.5865 13.704C80.7065 13.808 80.9065 13.86 81.1865 13.86H82.0265V15H80.9465C80.3305 15 79.8585 14.856 79.5305 14.568C79.2025 14.28 79.0385 13.812 79.0385 13.164V9.504H78.2585V8.388H79.0385V6.744H80.4185V8.388H82.0265V9.504H80.4185ZM94.5525 6.66L91.4205 15H89.8365L86.6925 6.66H88.1565L90.6285 13.596L93.1125 6.66H94.5525ZM96.8726 7.512C96.6246 7.512 96.4166 7.428 96.2486 7.26C96.0806 7.092 95.9966 6.884 95.9966 6.636C95.9966 6.388 96.0806 6.18 96.2486 6.012C96.4166 5.844 96.6246 5.76 96.8726 5.76C97.1126 5.76 97.3166 5.844 97.4846 6.012C97.6526 6.18 97.7366 6.388 97.7366 6.636C97.7366 6.884 97.6526 7.092 97.4846 7.26C97.3166 7.428 97.1126 7.512 96.8726 7.512ZM97.5446 8.388V15H96.1766V8.388H97.5446ZM102.221 15.108C101.701 15.108 101.233 15.016 100.817 14.832C100.409 14.64 100.085 14.384 99.8446 14.064C99.6046 13.736 99.4766 13.372 99.4606 12.972H100.877C100.901 13.252 101.033 13.488 101.273 13.68C101.521 13.864 101.829 13.956 102.197 13.956C102.581 13.956 102.877 13.884 103.085 13.74C103.301 13.588 103.409 13.396 103.409 13.164C103.409 12.916 103.289 12.732 103.049 12.612C102.817 12.492 102.445 12.36 101.933 12.216C101.437 12.08 101.033 11.948 100.721 11.82C100.409 11.692 100.137 11.496 99.9046 11.232C99.6806 10.968 99.5686 10.62 99.5686 10.188C99.5686 9.836 99.6726 9.516 99.8806 9.228C100.089 8.932 100.385 8.7 100.769 8.532C101.161 8.364 101.609 8.28 102.113 8.28C102.865 8.28 103.469 8.472 103.925 8.856C104.389 9.232 104.637 9.748 104.669 10.404H103.301C103.277 10.108 103.157 9.872 102.941 9.696C102.725 9.52 102.433 9.432 102.065 9.432C101.705 9.432 101.429 9.5 101.237 9.636C101.045 9.772 100.949 9.952 100.949 10.176C100.949 10.352 101.013 10.5 101.141 10.62C101.269 10.74 101.425 10.836 101.609 10.908C101.793 10.972 102.065 11.056 102.425 11.16C102.905 11.288 103.297 11.42 103.601 11.556C103.913 11.684 104.181 11.876 104.405 12.132C104.629 12.388 104.745 12.728 104.753 13.152C104.753 13.528 104.649 13.864 104.441 14.16C104.233 14.456 103.937 14.688 103.553 14.856C103.177 15.024 102.733 15.108 102.221 15.108ZM112.699 8.388V15H111.331V14.22C111.115 14.492 110.831 14.708 110.479 14.868C110.135 15.02 109.767 15.096 109.375 15.096C108.855 15.096 108.387 14.988 107.971 14.772C107.563 14.556 107.239 14.236 106.999 13.812C106.767 13.388 106.651 12.876 106.651 12.276V8.388H108.007V12.072C108.007 12.664 108.155 13.12 108.451 13.44C108.747 13.752 109.151 13.908 109.663 13.908C110.175 13.908 110.579 13.752 110.875 13.44C111.179 13.12 111.331 12.664 111.331 12.072V8.388H112.699ZM114.528 11.664C114.528 11 114.664 10.412 114.936 9.9C115.216 9.388 115.592 8.992 116.064 8.712C116.544 8.424 117.072 8.28 117.648 8.28C118.168 8.28 118.62 8.384 119.004 8.592C119.396 8.792 119.708 9.044 119.94 9.348V8.388H121.32V15H119.94V14.016C119.708 14.328 119.392 14.588 118.992 14.796C118.592 15.004 118.136 15.108 117.624 15.108C117.056 15.108 116.536 14.964 116.064 14.676C115.592 14.38 115.216 13.972 114.936 13.452C114.664 12.924 114.528 12.328 114.528 11.664ZM119.94 11.688C119.94 11.232 119.844 10.836 119.652 10.5C119.468 10.164 119.224 9.908 118.92 9.732C118.616 9.556 118.288 9.468 117.936 9.468C117.584 9.468 117.256 9.556 116.952 9.732C116.648 9.9 116.4 10.152 116.208 10.488C116.024 10.816 115.932 11.208 115.932 11.664C115.932 12.12 116.024 12.52 116.208 12.864C116.4 13.208 116.648 13.472 116.952 13.656C117.264 13.832 117.592 13.92 117.936 13.92C118.288 13.92 118.616 13.832 118.92 13.656C119.224 13.48 119.468 13.224 119.652 12.888C119.844 12.544 119.94 12.144 119.94 11.688ZM124.965 6.12V15H123.597V6.12H124.965ZM127.937 7.512C127.689 7.512 127.481 7.428 127.313 7.26C127.145 7.092 127.061 6.884 127.061 6.636C127.061 6.388 127.145 6.18 127.313 6.012C127.481 5.844 127.689 5.76 127.937 5.76C128.177 5.76 128.381 5.844 128.549 6.012C128.717 6.18 128.801 6.388 128.801 6.636C128.801 6.884 128.717 7.092 128.549 7.26C128.381 7.428 128.177 7.512 127.937 7.512ZM128.609 8.388V15H127.241V8.388H128.609ZM132.097 13.884H135.097V15H130.513V13.884L133.525 9.504H130.513V8.388H135.097V9.504L132.097 13.884ZM143.073 11.532C143.073 11.78 143.057 12.004 143.025 12.204H137.973C138.013 12.732 138.209 13.156 138.561 13.476C138.913 13.796 139.345 13.956 139.857 13.956C140.593 13.956 141.113 13.648 141.417 13.032H142.893C142.693 13.64 142.329 14.14 141.801 14.532C141.281 14.916 140.633 15.108 139.857 15.108C139.225 15.108 138.657 14.968 138.153 14.688C137.657 14.4 137.265 14 136.977 13.488C136.697 12.968 136.557 12.368 136.557 11.688C136.557 11.008 136.693 10.412 136.965 9.9C137.245 9.38 137.633 8.98 138.129 8.7C138.633 8.42 139.209 8.28 139.857 8.28C140.481 8.28 141.037 8.416 141.525 8.688C142.013 8.96 142.393 9.344 142.665 9.84C142.937 10.328 143.073 10.892 143.073 11.532ZM141.645 11.1C141.637 10.596 141.457 10.192 141.105 9.888C140.753 9.584 140.317 9.432 139.797 9.432C139.325 9.432 138.921 9.584 138.585 9.888C138.249 10.184 138.049 10.588 137.985 11.1H141.645ZM146.267 9.348C146.467 9.012 146.731 8.752 147.059 8.568C147.395 8.376 147.791 8.28 148.247 8.28V9.696H147.899C147.363 9.696 146.955 9.832 146.675 10.104C146.403 10.376 146.267 10.848 146.267 11.52V15H144.899V8.388H146.267V9.348Z"
            fill="#606060"
          />
        </svg>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#">Your Graphs</a>
        </li>
        <li className="nav-item">
          <button className="btn-flex">
            <span>Add</span>
            <BiPlus />
          </button>
        </li>
        <li className="nav-item"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
