 const tabs  = document.querySelectorAll(".tab-btn");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // reset all tabs / panes
        tabs.forEach(t => t.classList.remove("text-blue-600", "border-blue-600", "border-b-2"));
        panes.forEach(p => p.classList.add("hidden"));

        // activate current tab
        tab.classList.add("text-blue-600", "border-blue-600", "border-b-2");

        // show matching pane
        const selected = tab.getAttribute("data-tab");
        document.getElementById(`tab-${selected}`).classList.remove("hidden");
      });
    });