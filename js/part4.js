const $ = (selector) => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    $("#dateArrival").focus();

    $("#Reservation").addEventListener("submit", (eve) => {
        eve.preventDefault();

        const nights = $("#nights").value.trim
    