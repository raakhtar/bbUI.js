bb.roundPanel = {
    apply: function(elements) {
        if (bb.device.isBB5()) {
            // Apply our transforms to all the panels
            for (var i = 0; i < elements.length; i++) {
                var outerElement = elements[i];
                outerElement.setAttribute('class','bb-round-panel');
                if (outerElement.hasChildNodes()) {
                    var innerElements = [],
                        innerCount = outerElement.childNodes.length;
                    // Grab the internal contents so that we can add them
                    // back to the massaged version of this div
                    for (var j = 0; j < innerCount; j++) {
                        innerElements.push(outerElement.childNodes[j]);
                    }
                    for (var j = innerCount - 1; j >= 0; j--) {
                        outerElement.removeChild(outerElement.childNodes[j]);
                    }
                    // Create our new <div>'s
                    var placeholder = document.createElement('div');
                    placeholder.setAttribute('class','bb-round-panel-top-left bb-round-panel-background ');
                    outerElement.appendChild(placeholder);
                    placeholder = document.createElement('div');
                    placeholder.setAttribute('class','bb-round-panel-top-right bb-round-panel-background ');
                    outerElement.appendChild(placeholder);
                    var insidePanel = document.createElement('div');
                    insidePanel.setAttribute('class','bb-round-panel-inside');
                    outerElement.appendChild(insidePanel);
                    placeholder = document.createElement('div');
                    placeholder.setAttribute('class','bb-round-panel-bottom-left bb-round-panel-background ');
                    outerElement.appendChild(placeholder);
                    placeholder = document.createElement('div');
                    placeholder.setAttribute('class','bb-round-panel-bottom-right bb-round-panel-background ');
                    outerElement.appendChild(placeholder);
                    // Add our previous children back to the insidePanel
                    for (var j = 0; j < innerElements.length; j++) {
                        insidePanel.appendChild(innerElements[j]); 
                    }
                }
                // Handle the headers
                var items = outerElement.querySelectorAll('[data-bb-type=panel-header]');
                for (var j = 0; j < items.length; j++) {
                    items[j].setAttribute('class','bb-lowres-panel-header');
                }
            }
        }
        else {
            for (var i = 0; i < elements.length; i++) {
                var outerElement = elements[i];
                outerElement.setAttribute('class','bb-bb7-round-panel');
                var items = outerElement.querySelectorAll('[data-bb-type=panel-header]');
                for (var j = 0; j < items.length; j++) {
                    if (bb.device.isHiRes) {
                        items[j].setAttribute('class','bb-hires-panel-header');
                    } else {
                        items[j].setAttribute('class','bb-lowres-panel-header');
                    }
                }
            }
        }
    }
};
