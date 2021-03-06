/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var fileObject;

var plainBlackToken;

var counterNumber;

var openPage = {
    mibMarketTracks: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/index2.php", '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/index2.php", '_blank', 'location=no,enableViewportScale=yes');
        }
        
    },
    mibClinicalTracks: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/mib-clinical-tracks-quick-search.php", '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/mib-clinical-tracks-quick-search.php", '_blank', 'location=no,enableViewportScale=yes');
        }
        
    },      
    mibTechTracks: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/mib-tech-tracks-quick-search.php", '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/mib-tech-tracks-quick-search.php", '_blank', 'location=no,enableViewportScale=yes');
        }
    },
    piDirectory: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/mib-principal-investigators-directory.php", '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/mib-principal-investigators-directory.php", '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    piStudySitesDirectory: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/mib-pi-study-sites-directory.php", '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/mib-pi-study-sites-directory.php", '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },    
    productDirectory: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/mib-products-technologies-directory.php", '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/mib-products-technologies-directory.php", '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    companySponsorsDirectory: function () {
        if (device.platform == "android" || device.platform == "Android") {
            window.open("http://www.mibmarkettracks.com/mib-companies-sponsors-directory.php", '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open("http://www.mibmarkettracks.com/mib-companies-sponsors-directory.php", '_blank', 'location=yes,enableViewportScale=yes');
        }
    }
};

var app = {
    // Application Constructor
    initialize: function () {
		//alert("test 1");
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//alert("test1-recEvent");
        
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
	}
};