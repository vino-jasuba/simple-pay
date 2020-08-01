import React from "react";

export default function Icon({ name, className }) {
  if (name === "scale") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 19H13M1 4L4 5L1 4ZM4 5L1 14C1.8657 14.649 2.91852 14.9999 4.0005 14.9999C5.08248 14.9999 6.1353 14.649 7.001 14L4 5ZM4 5L7 14L4 5ZM4 5L10 3L4 5ZM16 5L19 4L16 5ZM16 5L13 14C13.8657 14.649 14.9185 14.9999 16.0005 14.9999C17.0825 14.9999 18.1353 14.649 19.001 14L16 5ZM16 5L19 14L16 5ZM16 5L10 3L16 5ZM10 1V3V1ZM10 19V3V19ZM10 19H7H10Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "balance") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 19H13M1 4L4 5L1 4ZM4 5L1 14C1.8657 14.649 2.91852 14.9999 4.0005 14.9999C5.08248 14.9999 6.1353 14.649 7.001 14L4 5ZM4 5L7 14L4 5ZM4 5L10 3L4 5ZM16 5L19 4L16 5ZM16 5L13 14C13.8657 14.649 14.9185 14.9999 16.0005 14.9999C17.0825 14.9999 18.1353 14.649 19.001 14L16 5ZM16 5L19 14L16 5ZM16 5L10 3L16 5ZM10 1V3V1ZM10 19V3V19ZM10 19H7H10Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "refresh") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1.99999V6.99999H1.582M1.582 6.99999C2.24585 5.35812 3.43568 3.9829 4.96503 3.08985C6.49438 2.1968 8.2768 1.8364 10.033 2.06513C11.7891 2.29386 13.4198 3.09878 14.6694 4.35377C15.919 5.60875 16.7168 7.24285 16.938 8.99999M1.582 6.99999H6M17 18V13H16.419M16.419 13C15.7542 14.6409 14.564 16.015 13.0348 16.9073C11.5056 17.7995 9.72374 18.1595 7.9681 17.9309C6.21246 17.7022 4.5822 16.8979 3.33253 15.6437C2.08287 14.3896 1.28435 12.7564 1.062 11M16.419 13H12"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <div className="border-2 border-gray-600 rounded-full">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 m-1 fill-current text-gray-600">
          <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" />
        </svg>
      </div>
    );
  }

  if (name === "check-circle") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 10L9 12L13 8M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "money") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}>
        <path
          class="secondary"
          d="M18 14.74a4 4 0 0 0-8 .26H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-1 1.74zM10 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
        <path
          class="primary"
          d="M7 9h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm7 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
      </svg>
    );
  }

  if (name === "order-horizontal") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}>
        <path
          class="secondary"
          d="M18.59 17H9a1 1 0 0 1 0-2h9.59l-2.3-2.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z"
        />
        <path
          class="primary"
          d="M5.41 7H15a1 1 0 0 1 0 2H5.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L5.4 7z"
        />
      </svg>
    );
  }

  if (name === "plus-filled") {
    return (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        className={className}>
        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
      </svg>
    );
  }

  if (name === "notification") {
    return (
      <svg
        id="Capa_1"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z" />
      </svg>
    );
  }

  if (name === "chevron-down") {
    return (
      <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }

  if (name === "ok-filled") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        className={className}>
        <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 19.734375 9.035156 L 12.863281 19.167969 C 12.660156 19.46875 12.335938 19.671875 12.015625 19.671875 C 11.695313 19.671875 11.34375 19.496094 11.117188 19.273438 L 7.085938 15.238281 C 6.8125 14.964844 6.8125 14.515625 7.085938 14.242188 L 8.082031 13.246094 C 8.355469 12.972656 8.804688 12.972656 9.074219 13.246094 L 11.699219 15.867188 L 17.402344 7.453125 C 17.621094 7.132813 18.0625 7.050781 18.382813 7.265625 L 19.550781 8.058594 C 19.867188 8.273438 19.953125 8.714844 19.734375 9.035156 Z" />
      </svg>
    );
  }

  if (name === "apartment") {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path d="M256 0H56c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h45V377c0-8.284 6.716-15 15-15h80c8.284 0 15 6.716 15 15v135h60V15c0-8.284-6.716-15-15-15zM131 327h-24.576c-8.077 0-15.027-6.207-15.407-14.275C90.611 304.111 97.475 297 106 297h24.576c8.077 0 15.027 6.207 15.407 14.275C146.389 319.889 139.525 327 131 327zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275-.406-8.614 6.458-15.725 14.983-15.725h24.576c8.077 0 15.027 6.207 15.407 14.275.406 8.614-6.458 15.725-14.983 15.725zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275C90.611 173.111 97.475 166 106 166h24.576c8.077 0 15.027 6.207 15.407 14.275C146.389 188.889 139.525 196 131 196zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275-.406-8.614 6.458-15.725 14.983-15.725h24.576c8.077 0 15.027 6.207 15.407 14.275.406 8.614-6.458 15.725-14.983 15.725zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275C90.611 42.111 97.475 35 106 35h24.576c8.077 0 15.027 6.207 15.407 14.275C146.389 57.889 139.525 65 131 65zm75 262h-24.576c-8.077 0-15.027-6.207-15.407-14.275C165.611 304.111 172.475 297 181 297h24.576c8.077 0 15.027 6.207 15.407 14.275C221.389 319.889 214.525 327 206 327zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275-.406-8.614 6.458-15.725 14.983-15.725h24.576c8.077 0 15.027 6.207 15.407 14.275.406 8.614-6.458 15.725-14.983 15.725zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275C165.611 173.111 172.475 166 181 166h24.576c8.077 0 15.027 6.207 15.407 14.275C221.389 188.889 214.525 196 206 196zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275-.406-8.614 6.458-15.725 14.983-15.725h24.576c8.077 0 15.027 6.207 15.407 14.275.406 8.614-6.458 15.725-14.983 15.725zm0-65.5h-24.576c-8.077 0-15.027-6.207-15.407-14.275C165.611 42.111 172.475 35 181 35h24.576c8.077 0 15.027 6.207 15.407 14.275C221.389 57.889 214.525 65 206 65zM456 182H301v330h155c8.284 0 15-6.716 15-15V197c0-8.284-6.716-15-15-15zm-25.009 280h-89.983c-8.284 0-15-6.716-15-15s6.716-15 15-15h89.983c8.284 0 15 6.716 15 15s-6.715 15-15 15zm0-66.667h-89.983c-8.284 0-15-6.716-15-15s6.716-15 15-15h89.983c8.284 0 15 6.716 15 15 0 8.285-6.715 15-15 15zm0-66.666h-89.983c-8.284 0-15-6.716-15-15s6.716-15 15-15h89.983c8.284 0 15 6.716 15 15s-6.715 15-15 15zm0-66.667h-89.983c-8.284 0-15-6.716-15-15s6.716-15 15-15h89.983c8.284 0 15 6.716 15 15s-6.715 15-15 15z" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H7M17 8L19 10M17 8V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H13M7 19C7.26522 19 7.51957 18.8946 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18V14C8 13.7348 8.10536 13.4804 8.29289 13.2929C8.48043 13.1054 8.73478 13 9 13H11C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14V18C12 18.2652 12.1054 18.5196 12.2929 18.7071C12.4804 18.8946 12.7348 19 13 19M7 19H13"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "history") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 6V10L13 13M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "credit-card") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6H19H1ZM5 11H6H5ZM10 11H11H10ZM4 15H16C16.7956 15 17.5587 14.6839 18.1213 14.1213C18.6839 13.5587 19 12.7956 19 12V4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V12C1 12.7956 1.31607 13.5587 1.87868 14.1213C2.44129 14.6839 3.20435 15 4 15Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "user-group") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 17H21V15C21 14.3765 20.8057 13.7686 20.4441 13.2606C20.0826 12.7527 19.5718 12.37 18.9827 12.1658C18.3937 11.9615 17.7556 11.9459 17.1573 12.121C16.5589 12.2962 16.03 12.6534 15.644 13.143M16 17H6M16 17V15C16 14.344 15.874 13.717 15.644 13.143M15.644 13.143C15.2726 12.215 14.6318 11.4195 13.804 10.8591C12.9762 10.2988 11.9996 9.9993 11 9.9993C10.0004 9.9993 9.02376 10.2988 8.196 10.8591C7.36825 11.4195 6.72736 12.215 6.356 13.143M6 17H1V15C1.00005 14.3765 1.19434 13.7686 1.55586 13.2606C1.91739 12.7527 2.42819 12.37 3.01725 12.1658C3.60632 11.9615 4.24438 11.9459 4.84274 12.121C5.4411 12.2962 5.97003 12.6534 6.356 13.143M6 17V15C6 14.344 6.126 13.717 6.356 13.143M14 4C14 4.79565 13.6839 5.55871 13.1213 6.12132C12.5587 6.68393 11.7956 7 11 7C10.2044 7 9.44129 6.68393 8.87868 6.12132C8.31607 5.55871 8 4.79565 8 4C8 3.20435 8.31607 2.44129 8.87868 1.87868C9.44129 1.31607 10.2044 1 11 1C11.7956 1 12.5587 1.31607 13.1213 1.87868C13.6839 2.44129 14 3.20435 14 4ZM20 7C20 7.53043 19.7893 8.03914 19.4142 8.41421C19.0391 8.78929 18.5304 9 18 9C17.4696 9 16.9609 8.78929 16.5858 8.41421C16.2107 8.03914 16 7.53043 16 7C16 6.46957 16.2107 5.96086 16.5858 5.58579C16.9609 5.21071 17.4696 5 18 5C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7ZM6 7C6 7.53043 5.78929 8.03914 5.41421 8.41421C5.03914 8.78929 4.53043 9 4 9C3.46957 9 2.96086 8.78929 2.58579 8.41421C2.21071 8.03914 2 7.53043 2 7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5C4.53043 5 5.03914 5.21071 5.41421 5.58579C5.78929 5.96086 6 6.46957 6 7Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "document-reports") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 15V13V15ZM8 15V11V15ZM11 15V9V15ZM13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8.586C8.8512 1.00006 9.10551 1.10545 9.293 1.293L14.707 6.707C14.8946 6.89449 14.9999 7.1488 15 7.414V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.749 5.99 10.049 5.452 10.325 4.317Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12V12Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "help") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.228 9C8.777 7.835 10.258 7 12 7C14.21 7 16 8.343 16 10C16 11.4 14.722 12.575 12.994 12.907C12.452 13.011 12 13.447 12 14M12 17H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12L11 14L15 10M20.618 5.984C17.4561 6.15192 14.3567 5.05861 12 2.944C9.64327 5.05861 6.5439 6.15192 3.382 5.984C3.12753 6.96911 2.99917 7.98255 3 9C3 14.591 6.824 19.29 12 20.622C17.176 19.29 21 14.592 21 9C21 7.958 20.867 6.948 20.618 5.984Z"
          stroke="#7edce2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  return null;
}