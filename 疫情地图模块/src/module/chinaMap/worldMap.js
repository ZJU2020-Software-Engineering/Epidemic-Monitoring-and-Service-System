import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ECharts } from "react-native-echarts-wrapper";
import {SegmentedControl} from "@ant-design/react-native";

const liaoning = {
    "options": [
    {
        "series": [
          {
            name: "确诊病例",
            type: "map",
            mapType: 'world',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            
            "data": [
                {
                    name: 'Afghanistan',
                    value: Math.floor(Math.random()*1000)
                  },
                  {
                    name: 'Angola',
                    value: 19549.124
                  },
                  {
                    name: 'Albania',
                    value: 3150.143
                  },
                  {
                    name: 'United Arab Emirates',
                    value: 8441.537
                  },
                  {
                    name: 'Argentina',
                    value: 40374.224
                  },
                  {
                    name: 'Armenia',
                    value: 2963.496
                  },
                  {
                    name: 'French Southern and Antarctic Lands',
                    value: 268.065
                  },
                  {
                    name: 'Australia',
                    value: 22404.488
                  },
                  {
                    name: 'Austria',
                    value: 8401.924
                  },
                  {
                    name: 'Azerbaijan',
                    value: 9094.718
                  },
                  {
                    name: 'Burundi',
                    value: 9232.753
                  },
                  {
                    name: 'Belgium',
                    value: 10941.288
                  },
                  {
                    name: 'Benin',
                    value: 9509.798
                  },
                  {
                    name: 'Burkina Faso',
                    value: 15540.284
                  },
                  {
                    name: 'Bangladesh',
                    value: 151125.475
                  },
                  {
                    name: 'Bulgaria',
                    value: 7389.175
                  },
                  {
                    name: 'The Bahamas',
                    value: 66402.316
                  },
                  {
                    name: 'Bosnia and Herzegovina',
                    value: 3845.929
                  },
                  {
                    name: 'Belarus',
                    value: 9491.07
                  },
                  {
                    name: 'Belize',
                    value: 308.595
                  },
                  {
                    name: 'Bermuda',
                    value: 64.951
                  },
                  {
                    name: 'Bolivia',
                    value: 716.939
                  },
                  {
                    name: 'Brazil',
                    value: 195210.154
                  },
                  {
                    name: 'Brunei',
                    value: 27.223
                  },
                  {
                    name: 'Bhutan',
                    value: 716.939
                  },
                  {
                    name: 'Botswana',
                    value: 1969.341
                  },
                  {
                    name: 'Central African Republic',
                    value: 4349.921
                  },
                  {
                    name: 'Canada',
                    value: 34126.24
                  },
                  {
                    name: 'Switzerland',
                    value: 7830.534
                  },
                  {
                    name: 'Chile',
                    value: 17150.76
                  },
                  {
                    name: 'China',
                    value: Math.floor(Math.random()*1000)
                  },
                  {
                    name: 'Ivory Coast',
                    value: 60508.978
                  },
                  {
                    name: 'Cameroon',
                    value: 20624.343
                  },
                  {
                    name: 'Democratic Republic of the Congo',
                    value: 62191.161
                  },
                  {
                    name: 'Republic of the Congo',
                    value: 3573.024
                  },
                  {
                    name: 'Colombia',
                    value: 46444.798
                  },
                  {
                    name: 'Costa Rica',
                    value: 4669.685
                  },
                  {
                    name: 'Cuba',
                    value: 11281.768
                  },
                  {
                    name: 'Northern Cyprus',
                    value: 1.468
                  },
                  {
                    name: 'Cyprus',
                    value: 1103.685
                  },
                  {
                    name: 'Czech Republic',
                    value: 10553.701
                  },
                  {
                    name: 'Germany',
                    value: 83017.404
                  },
                  {
                    name: 'Djibouti',
                    value: 834.036
                  },
                  {
                    name: 'Denmark',
                    value: 5550.959
                  },
                  {
                    name: 'Dominican Republic',
                    value: 10016.797
                  },
                  {
                    name: 'Algeria',
                    value: 37062.82
                  },
                  {
                    name: 'Ecuador',
                    value: 15001.072
                  },
                  {
                    name: 'Egypt',
                    value: 78075.705
                  },
                  {
                    name: 'Eritrea',
                    value: 5741.159
                  },
                  {
                    name: 'Spain',
                    value: 46182.038
                  },
                  {
                    name: 'Estonia',
                    value: 1298.533
                  },
                  {
                    name: 'Ethiopia',
                    value: 87095.281
                  },
                  {
                    name: 'Finland',
                    value: 5367.693
                  },
                  {
                    name: 'Fiji',
                    value: 860.559
                  },
                  {
                    name: 'Falkland Islands',
                    value: 49.581
                  },
                  {
                    name: 'France',
                    value: 63230.866
                  },
                  {
                    name: 'Gabon',
                    value: 1556.222
                  },
                  {
                    name: 'United Kingdom',
                    value: 62066.35
                  },
                  {
                    name: 'Georgia',
                    value: 4388.674
                  },
                  {
                    name: 'Ghana',
                    value: 24262.901
                  },
                  {
                    name: 'Guinea',
                    value: 10876.033
                  },
                  {
                    name: 'Gambia',
                    value: 1680.64
                  },
                  {
                    name: 'Guinea Bissau',
                    value: 10876.033
                  },
                  {
                    name: 'Equatorial Guinea',
                    value: 696.167
                  },
                  {
                    name: 'Greece',
                    value: 11109.999
                  },
                  {
                    name: 'Greenland',
                    value: 56.546
                  },
                  {
                    name: 'Guatemala',
                    value: 14341.576
                  },
                  {
                    name: 'French Guiana',
                    value: 231.169
                  },
                  {
                    name: 'Guyana',
                    value: 786.126
                  },
                  {
                    name: 'Honduras',
                    value: 7621.204
                  },
                  {
                    name: 'Croatia',
                    value: 4338.027
                  },
                  {
                    name: 'Haiti',
                    value: 9896.4
                  },
                  {
                    name: 'Hungary',
                    value: 10014.633
                  },
                  {
                    name: 'Indonesia',
                    value: 240676.485
                  },
                  {
                    name: 'India',
                    value: 12054.648
                  },
                  {
                    name: 'Ireland',
                    value: 4467.561
                  },
                  {
                    name: 'Iran',
                    value: 240676.485
                  },
                  {
                    name: 'Iraq',
                    value: 30962.38
                  },
                  {
                    name: 'Iceland',
                    value: 318.042
                  },
                  {
                    name: 'Israel',
                    value: 7420.368
                  },
                  {
                    name: 'Italy',
                    value: 60508.978
                  },
                  {
                    name: 'Jamaica',
                    value: 2741.485
                  },
                  {
                    name: 'Jordan',
                    value: 6454.554
                  },
                  {
                    name: 'Japan',
                    value: 127352.833
                  },
                  {
                    name: 'Kazakhstan',
                    value: 15921.127
                  },
                  {
                    name: 'Kenya',
                    value: 40909.194
                  },
                  {
                    name: 'Kyrgyzstan',
                    value: 5334.223
                  },
                  {
                    name: 'Cambodia',
                    value: 14364.931
                  },
                  {
                    name: 'South Korea',
                    value: 51452.352
                  },
                  {
                    name: 'Kosovo',
                    value: 97.743
                  },
                  {
                    name: 'Kuwait',
                    value: 2991.58
                  },
                  {
                    name: 'Laos',
                    value: 6395.713
                  },
                  {
                    name: 'Lebanon',
                    value: 4341.092
                  },
                  {
                    name: 'Liberia',
                    value: 3957.99
                  },
                  {
                    name: 'Libya',
                    value: 6040.612
                  },
                  {
                    name: 'Sri Lanka',
                    value: 20758.779
                  },
                  {
                    name: 'Lesotho',
                    value: 2008.921
                  },
                  {
                    name: 'Lithuania',
                    value: 3068.457
                  },
                  {
                    name: 'Luxembourg',
                    value: 507.885
                  },
                  {
                    name: 'Latvia',
                    value: 2090.519
                  },
                  {
                    name: 'Morocco',
                    value: 31642.36
                  },
                  {
                    name: 'Moldova',
                    value: 103.619
                  },
                  {
                    name: 'Madagascar',
                    value: 21079.532
                  },
                  {
                    name: 'Mexico',
                    value: 117886.404
                  },
                  {
                    name: 'Macedonia',
                    value: 507.885
                  },
                  {
                    name: 'Mali',
                    value: 13985.961
                  },
                  {
                    name: 'Myanmar',
                    value: 51931.231
                  },
                  {
                    name: 'Montenegro',
                    value: 620.078
                  },
                  {
                    name: 'Mongolia',
                    value: 2712.738
                  },
                  {
                    name: 'Mozambique',
                    value: 23967.265
                  },
                  {
                    name: 'Mauritania',
                    value: 3609.42
                  },
                  {
                    name: 'Malawi',
                    value: 15013.694
                  },
                  {
                    name: 'Malaysia',
                    value: 28275.835
                  },
                  {
                    name: 'Namibia',
                    value: 2178.967
                  },
                  {
                    name: 'New Caledonia',
                    value: 246.379
                  },
                  {
                    name: 'Niger',
                    value: 15893.746
                  },
                  {
                    name: 'Nigeria',
                    value: 159707.78
                  },
                  {
                    name: 'Nicaragua',
                    value: 5822.209
                  },
                  {
                    name: 'Netherlands',
                    value: 16615.243
                  },
                  {
                    name: 'Norway',
                    value: 4891.251
                  },
                  {
                    name: 'Nepal',
                    value: 26846.016
                  },
                  {
                    name: 'New Zealand',
                    value: 4368.136
                  },
                  {
                    name: 'Oman',
                    value: 2802.768
                  },
                  {
                    name: 'Pakistan',
                    value: 173149.306
                  },
                  {
                    name: 'Panama',
                    value: 3678.128
                  },
                  {
                    name: 'Peru',
                    value: 29262.83
                  },
                  {
                    name: 'Philippines',
                    value: 93444.322
                  },
                  {
                    name: 'Papua New Guinea',
                    value: 6858.945
                  },
                  {
                    name: 'Poland',
                    value: 38198.754
                  },
                  {
                    name: 'Puerto Rico',
                    value: 3709.671
                  },
                  {
                    name: 'North Korea',
                    value: 1.468
                  },
                  {
                    name: 'Portugal',
                    value: 10589.792
                  },
                  {
                    name: 'Paraguay',
                    value: 6459.721
                  },
                  {
                    name: 'Qatar',
                    value: 1749.713
                  },
                  {
                    name: 'Romania',
                    value: 21861.476
                  },
                  {
                    name: 'Russia',
                    value: 21861.476
                  },
                  {
                    name: 'Rwanda',
                    value: 10836.732
                  },
                  {
                    name: 'Western Sahara',
                    value: 514.648
                  },
                  {
                    name: 'Saudi Arabia',
                    value: 27258.387
                  },
                  {
                    name: 'Sudan',
                    value: 35652.002
                  },
                  {
                    name: 'South Sudan',
                    value: 9940.929
                  },
                  {
                    name: 'Senegal',
                    value: 12950.564
                  },
                  {
                    name: 'Solomon Islands',
                    value: 526.447
                  },
                  {
                    name: 'Sierra Leone',
                    value: 5751.976
                  },
                  {
                    name: 'El Salvador',
                    value: 6218.195
                  },
                  {
                    name: 'Somaliland',
                    value: 9636.173
                  },
                  {
                    name: 'Somalia',
                    value: 9636.173
                  },
                  {
                    name: 'Republic of Serbia',
                    value: 3573.024
                  },
                  {
                    name: 'Suriname',
                    value: 524.96
                  },
                  {
                    name: 'Slovakia',
                    value: 5433.437
                  },
                  {
                    name: 'Slovenia',
                    value: 2054.232
                  },
                  {
                    name: 'Sweden',
                    value: 9382.297
                  },
                  {
                    name: 'Swaziland',
                    value: 1193.148
                  },
                  {
                    name: 'Syria',
                    value: 7830.534
                  },
                  {
                    name: 'Chad',
                    value: 11720.781
                  },
                  {
                    name: 'Togo',
                    value: 6306.014
                  },
                  {
                    name: 'Thailand',
                    value: 66402.316
                  },
                  {
                    name: 'Tajikistan',
                    value: 7627.326
                  },
                  {
                    name: 'Turkmenistan',
                    value: 5041.995
                  },
                  {
                    name: 'East Timor',
                    value: 10016.797
                  },
                  {
                    name: 'Trinidad and Tobago',
                    value: 1328.095
                  },
                  {
                    name: 'Tunisia',
                    value: 10631.83
                  },
                  {
                    name: 'Turkey',
                    value: 72137.546
                  },
                  {
                    name: 'United Republic of Tanzania',
                    value: 44973.33
                  },
                  {
                    name: 'Uganda',
                    value: 33987.213
                  },
                  {
                    name: 'Ukraine',
                    value: 46050.22
                  },
                  {
                    name: 'Uruguay',
                    value: 3371.982
                  },
                  {
                    name: 'United States',
                    value: 500
                  },
                  {
                    name: 'Uzbekistan',
                    value: 27769.27
                  },
                  {
                    name: 'Venezuela',
                    value: 236.299
                  },
                  {
                    name: 'Vietnam',
                    value: 89047.397
                  },
                  {
                    name: 'Vanuatu',
                    value: 236.299
                  },
                  {
                    name: 'West Bank',
                    value: 13.565
                  },
                  {
                    name: 'Yemen',
                    value: 22763.008
                  },
                  {
                    name: 'South Africa',
                    value: 51452.352
                  },
                  {
                    name: 'Zambia',
                    value: 13216.985
                  },
                  {
                    name: 'Zimbabwe',
                    value: 13076.978
                  }
            ],
           
        }],
       
    }, {
      "series": [
        {
          name: "确诊病例",
          type: "map",
          mapType: 'world',
          label: {
              normal: {
                  show: true
              },
              emphasis: {
                  show: true
              }
          },
          geoIndex: 0,
          
          "data": [
            {
                name: 'Afghanistan',
                value: 28397.812
              },
              {
                name: 'Angola',
                value: 19549.124
              },
              {
                name: 'Albania',
                value: 3150.143
              },
              {
                name: 'United Arab Emirates',
                value: 8441.537
              },
              {
                name: 'Argentina',
                value: 40374.224
              },
              {
                name: 'Armenia',
                value: 2963.496
              },
              {
                name: 'French Southern and Antarctic Lands',
                value: 268.065
              },
              {
                name: 'Australia',
                value: 22404.488
              },
              {
                name: 'Austria',
                value: 8401.924
              },
              {
                name: 'Azerbaijan',
                value: 9094.718
              },
              {
                name: 'Burundi',
                value: 9232.753
              },
              {
                name: 'Belgium',
                value: 10941.288
              },
              {
                name: 'Benin',
                value: 9509.798
              },
              {
                name: 'Burkina Faso',
                value: 15540.284
              },
              {
                name: 'Bangladesh',
                value: 151125.475
              },
              {
                name: 'Bulgaria',
                value: 7389.175
              },
              {
                name: 'The Bahamas',
                value: 66402.316
              },
              {
                name: 'Bosnia and Herzegovina',
                value: 3845.929
              },
              {
                name: 'Belarus',
                value: 9491.07
              },
              {
                name: 'Belize',
                value: 308.595
              },
              {
                name: 'Bermuda',
                value: 64.951
              },
              {
                name: 'Bolivia',
                value: 716.939
              },
              {
                name: 'Brazil',
                value: 195210.154
              },
              {
                name: 'Brunei',
                value: 27.223
              },
              {
                name: 'Bhutan',
                value: 716.939
              },
              {
                name: 'Botswana',
                value: 1969.341
              },
              {
                name: 'Central African Republic',
                value: 4349.921
              },
              {
                name: 'Canada',
                value: 34126.24
              },
              {
                name: 'Switzerland',
                value: 7830.534
              },
              {
                name: 'Chile',
                value: 17150.76
              },
              {
                name: 'China',
                value: 1359821.465
              },
              {
                name: 'Ivory Coast',
                value: 60508.978
              },
              {
                name: 'Cameroon',
                value: 20624.343
              },
              {
                name: 'Democratic Republic of the Congo',
                value: 62191.161
              },
              {
                name: 'Republic of the Congo',
                value: 3573.024
              },
              {
                name: 'Colombia',
                value: 46444.798
              },
              {
                name: 'Costa Rica',
                value: 4669.685
              },
              {
                name: 'Cuba',
                value: 11281.768
              },
              {
                name: 'Northern Cyprus',
                value: 1.468
              },
              {
                name: 'Cyprus',
                value: 1103.685
              },
              {
                name: 'Czech Republic',
                value: 10553.701
              },
              {
                name: 'Germany',
                value: 83017.404
              },
              {
                name: 'Djibouti',
                value: 834.036
              },
              {
                name: 'Denmark',
                value: 5550.959
              },
              {
                name: 'Dominican Republic',
                value: 10016.797
              },
              {
                name: 'Algeria',
                value: 37062.82
              },
              {
                name: 'Ecuador',
                value: 15001.072
              },
              {
                name: 'Egypt',
                value: 78075.705
              },
              {
                name: 'Eritrea',
                value: 5741.159
              },
              {
                name: 'Spain',
                value: 46182.038
              },
              {
                name: 'Estonia',
                value: 1298.533
              },
              {
                name: 'Ethiopia',
                value: 87095.281
              },
              {
                name: 'Finland',
                value: 5367.693
              },
              {
                name: 'Fiji',
                value: 860.559
              },
              {
                name: 'Falkland Islands',
                value: 49.581
              },
              {
                name: 'France',
                value: 63230.866
              },
              {
                name: 'Gabon',
                value: 1556.222
              },
              {
                name: 'United Kingdom',
                value: 62066.35
              },
              {
                name: 'Georgia',
                value: 4388.674
              },
              {
                name: 'Ghana',
                value: 24262.901
              },
              {
                name: 'Guinea',
                value: 10876.033
              },
              {
                name: 'Gambia',
                value: 1680.64
              },
              {
                name: 'Guinea Bissau',
                value: 10876.033
              },
              {
                name: 'Equatorial Guinea',
                value: 696.167
              },
              {
                name: 'Greece',
                value: 11109.999
              },
              {
                name: 'Greenland',
                value: 56.546
              },
              {
                name: 'Guatemala',
                value: 14341.576
              },
              {
                name: 'French Guiana',
                value: 231.169
              },
              {
                name: 'Guyana',
                value: 786.126
              },
              {
                name: 'Honduras',
                value: 7621.204
              },
              {
                name: 'Croatia',
                value: 4338.027
              },
              {
                name: 'Haiti',
                value: 9896.4
              },
              {
                name: 'Hungary',
                value: 10014.633
              },
              {
                name: 'Indonesia',
                value: 240676.485
              },
              {
                name: 'India',
                value: 12054.648
              },
              {
                name: 'Ireland',
                value: 4467.561
              },
              {
                name: 'Iran',
                value: 240676.485
              },
              {
                name: 'Iraq',
                value: 30962.38
              },
              {
                name: 'Iceland',
                value: 318.042
              },
              {
                name: 'Israel',
                value: 7420.368
              },
              {
                name: 'Italy',
                value: 60508.978
              },
              {
                name: 'Jamaica',
                value: 2741.485
              },
              {
                name: 'Jordan',
                value: 6454.554
              },
              {
                name: 'Japan',
                value: 127352.833
              },
              {
                name: 'Kazakhstan',
                value: 15921.127
              },
              {
                name: 'Kenya',
                value: 40909.194
              },
              {
                name: 'Kyrgyzstan',
                value: 5334.223
              },
              {
                name: 'Cambodia',
                value: 14364.931
              },
              {
                name: 'South Korea',
                value: 51452.352
              },
              {
                name: 'Kosovo',
                value: 97.743
              },
              {
                name: 'Kuwait',
                value: 2991.58
              },
              {
                name: 'Laos',
                value: 6395.713
              },
              {
                name: 'Lebanon',
                value: 4341.092
              },
              {
                name: 'Liberia',
                value: 3957.99
              },
              {
                name: 'Libya',
                value: 6040.612
              },
              {
                name: 'Sri Lanka',
                value: 20758.779
              },
              {
                name: 'Lesotho',
                value: 2008.921
              },
              {
                name: 'Lithuania',
                value: 3068.457
              },
              {
                name: 'Luxembourg',
                value: 507.885
              },
              {
                name: 'Latvia',
                value: 2090.519
              },
              {
                name: 'Morocco',
                value: 31642.36
              },
              {
                name: 'Moldova',
                value: 103.619
              },
              {
                name: 'Madagascar',
                value: 21079.532
              },
              {
                name: 'Mexico',
                value: 117886.404
              },
              {
                name: 'Macedonia',
                value: 507.885
              },
              {
                name: 'Mali',
                value: 13985.961
              },
              {
                name: 'Myanmar',
                value: 51931.231
              },
              {
                name: 'Montenegro',
                value: 620.078
              },
              {
                name: 'Mongolia',
                value: 2712.738
              },
              {
                name: 'Mozambique',
                value: 23967.265
              },
              {
                name: 'Mauritania',
                value: 3609.42
              },
              {
                name: 'Malawi',
                value: 15013.694
              },
              {
                name: 'Malaysia',
                value: 28275.835
              },
              {
                name: 'Namibia',
                value: 2178.967
              },
              {
                name: 'New Caledonia',
                value: 246.379
              },
              {
                name: 'Niger',
                value: 15893.746
              },
              {
                name: 'Nigeria',
                value: 159707.78
              },
              {
                name: 'Nicaragua',
                value: 5822.209
              },
              {
                name: 'Netherlands',
                value: 16615.243
              },
              {
                name: 'Norway',
                value: 4891.251
              },
              {
                name: 'Nepal',
                value: 26846.016
              },
              {
                name: 'New Zealand',
                value: 4368.136
              },
              {
                name: 'Oman',
                value: 2802.768
              },
              {
                name: 'Pakistan',
                value: 173149.306
              },
              {
                name: 'Panama',
                value: 3678.128
              },
              {
                name: 'Peru',
                value: 29262.83
              },
              {
                name: 'Philippines',
                value: 93444.322
              },
              {
                name: 'Papua New Guinea',
                value: 6858.945
              },
              {
                name: 'Poland',
                value: 38198.754
              },
              {
                name: 'Puerto Rico',
                value: 3709.671
              },
              {
                name: 'North Korea',
                value: 1.468
              },
              {
                name: 'Portugal',
                value: 10589.792
              },
              {
                name: 'Paraguay',
                value: 6459.721
              },
              {
                name: 'Qatar',
                value: 1749.713
              },
              {
                name: 'Romania',
                value: 21861.476
              },
              {
                name: 'Russia',
                value: 21861.476
              },
              {
                name: 'Rwanda',
                value: 10836.732
              },
              {
                name: 'Western Sahara',
                value: 514.648
              },
              {
                name: 'Saudi Arabia',
                value: 27258.387
              },
              {
                name: 'Sudan',
                value: 35652.002
              },
              {
                name: 'South Sudan',
                value: 9940.929
              },
              {
                name: 'Senegal',
                value: 12950.564
              },
              {
                name: 'Solomon Islands',
                value: 526.447
              },
              {
                name: 'Sierra Leone',
                value: 5751.976
              },
              {
                name: 'El Salvador',
                value: 6218.195
              },
              {
                name: 'Somaliland',
                value: 9636.173
              },
              {
                name: 'Somalia',
                value: 9636.173
              },
              {
                name: 'Republic of Serbia',
                value: 3573.024
              },
              {
                name: 'Suriname',
                value: 524.96
              },
              {
                name: 'Slovakia',
                value: 5433.437
              },
              {
                name: 'Slovenia',
                value: 2054.232
              },
              {
                name: 'Sweden',
                value: 9382.297
              },
              {
                name: 'Swaziland',
                value: 1193.148
              },
              {
                name: 'Syria',
                value: 7830.534
              },
              {
                name: 'Chad',
                value: 11720.781
              },
              {
                name: 'Togo',
                value: 6306.014
              },
              {
                name: 'Thailand',
                value: 66402.316
              },
              {
                name: 'Tajikistan',
                value: 7627.326
              },
              {
                name: 'Turkmenistan',
                value: 5041.995
              },
              {
                name: 'East Timor',
                value: 10016.797
              },
              {
                name: 'Trinidad and Tobago',
                value: 1328.095
              },
              {
                name: 'Tunisia',
                value: 10631.83
              },
              {
                name: 'Turkey',
                value: 72137.546
              },
              {
                name: 'United Republic of Tanzania',
                value: 44973.33
              },
              {
                name: 'Uganda',
                value: 33987.213
              },
              {
                name: 'Ukraine',
                value: 46050.22
              },
              {
                name: 'Uruguay',
                value: 3371.982
              },
              {
                name: 'United States',
                value: 312247.116
              },
              {
                name: 'Uzbekistan',
                value: 27769.27
              },
              {
                name: 'Venezuela',
                value: 236.299
              },
              {
                name: 'Vietnam',
                value: 89047.397
              },
              {
                name: 'Vanuatu',
                value: 236.299
              },
              {
                name: 'West Bank',
                value: 13.565
              },
              {
                name: 'Yemen',
                value: 22763.008
              },
              {
                name: 'South Africa',
                value: 51452.352
              },
              {
                name: 'Zambia',
                value: 13216.985
              },
              {
                name: 'Zimbabwe',
                value: 13076.978
              }
          ],
         
      }],
     
  }, {
    "series": [
      {
        name: "确诊病例",
        type: "map",
        mapType: 'world',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        geoIndex: 0,
        
        "data": [
            {
                name: 'Afghanistan',
                value: 28397.812
              },
              {
                name: 'Angola',
                value: 19549.124
              },
              {
                name: 'Albania',
                value: 3150.143
              },
              {
                name: 'United Arab Emirates',
                value: 8441.537
              },
              {
                name: 'Argentina',
                value: 40374.224
              },
              {
                name: 'Armenia',
                value: 2963.496
              },
              {
                name: 'French Southern and Antarctic Lands',
                value: 268.065
              },
              {
                name: 'Australia',
                value: 22404.488
              },
              {
                name: 'Austria',
                value: 8401.924
              },
              {
                name: 'Azerbaijan',
                value: 9094.718
              },
              {
                name: 'Burundi',
                value: 9232.753
              },
              {
                name: 'Belgium',
                value: 10941.288
              },
              {
                name: 'Benin',
                value: 9509.798
              },
              {
                name: 'Burkina Faso',
                value: 15540.284
              },
              {
                name: 'Bangladesh',
                value: 151125.475
              },
              {
                name: 'Bulgaria',
                value: 7389.175
              },
              {
                name: 'The Bahamas',
                value: 66402.316
              },
              {
                name: 'Bosnia and Herzegovina',
                value: 3845.929
              },
              {
                name: 'Belarus',
                value: 9491.07
              },
              {
                name: 'Belize',
                value: 308.595
              },
              {
                name: 'Bermuda',
                value: 64.951
              },
              {
                name: 'Bolivia',
                value: 716.939
              },
              {
                name: 'Brazil',
                value: 195210.154
              },
              {
                name: 'Brunei',
                value: 27.223
              },
              {
                name: 'Bhutan',
                value: 716.939
              },
              {
                name: 'Botswana',
                value: 1969.341
              },
              {
                name: 'Central African Republic',
                value: 4349.921
              },
              {
                name: 'Canada',
                value: 34126.24
              },
              {
                name: 'Switzerland',
                value: 7830.534
              },
              {
                name: 'Chile',
                value: 17150.76
              },
              {
                name: 'China',
                value: 1359821.465
              },
              {
                name: 'Ivory Coast',
                value: 60508.978
              },
              {
                name: 'Cameroon',
                value: 20624.343
              },
              {
                name: 'Democratic Republic of the Congo',
                value: 62191.161
              },
              {
                name: 'Republic of the Congo',
                value: 3573.024
              },
              {
                name: 'Colombia',
                value: 46444.798
              },
              {
                name: 'Costa Rica',
                value: 4669.685
              },
              {
                name: 'Cuba',
                value: 11281.768
              },
              {
                name: 'Northern Cyprus',
                value: 1.468
              },
              {
                name: 'Cyprus',
                value: 1103.685
              },
              {
                name: 'Czech Republic',
                value: 10553.701
              },
              {
                name: 'Germany',
                value: 83017.404
              },
              {
                name: 'Djibouti',
                value: 834.036
              },
              {
                name: 'Denmark',
                value: 5550.959
              },
              {
                name: 'Dominican Republic',
                value: 10016.797
              },
              {
                name: 'Algeria',
                value: 37062.82
              },
              {
                name: 'Ecuador',
                value: 15001.072
              },
              {
                name: 'Egypt',
                value: 78075.705
              },
              {
                name: 'Eritrea',
                value: 5741.159
              },
              {
                name: 'Spain',
                value: 46182.038
              },
              {
                name: 'Estonia',
                value: 1298.533
              },
              {
                name: 'Ethiopia',
                value: 87095.281
              },
              {
                name: 'Finland',
                value: 5367.693
              },
              {
                name: 'Fiji',
                value: 860.559
              },
              {
                name: 'Falkland Islands',
                value: 49.581
              },
              {
                name: 'France',
                value: 63230.866
              },
              {
                name: 'Gabon',
                value: 1556.222
              },
              {
                name: 'United Kingdom',
                value: 62066.35
              },
              {
                name: 'Georgia',
                value: 4388.674
              },
              {
                name: 'Ghana',
                value: 24262.901
              },
              {
                name: 'Guinea',
                value: 10876.033
              },
              {
                name: 'Gambia',
                value: 1680.64
              },
              {
                name: 'Guinea Bissau',
                value: 10876.033
              },
              {
                name: 'Equatorial Guinea',
                value: 696.167
              },
              {
                name: 'Greece',
                value: 11109.999
              },
              {
                name: 'Greenland',
                value: 56.546
              },
              {
                name: 'Guatemala',
                value: 14341.576
              },
              {
                name: 'French Guiana',
                value: 231.169
              },
              {
                name: 'Guyana',
                value: 786.126
              },
              {
                name: 'Honduras',
                value: 7621.204
              },
              {
                name: 'Croatia',
                value: 4338.027
              },
              {
                name: 'Haiti',
                value: 9896.4
              },
              {
                name: 'Hungary',
                value: 10014.633
              },
              {
                name: 'Indonesia',
                value: 240676.485
              },
              {
                name: 'India',
                value: 12054.648
              },
              {
                name: 'Ireland',
                value: 4467.561
              },
              {
                name: 'Iran',
                value: 240676.485
              },
              {
                name: 'Iraq',
                value: 30962.38
              },
              {
                name: 'Iceland',
                value: 318.042
              },
              {
                name: 'Israel',
                value: 7420.368
              },
              {
                name: 'Italy',
                value: 60508.978
              },
              {
                name: 'Jamaica',
                value: 2741.485
              },
              {
                name: 'Jordan',
                value: 6454.554
              },
              {
                name: 'Japan',
                value: 127352.833
              },
              {
                name: 'Kazakhstan',
                value: 15921.127
              },
              {
                name: 'Kenya',
                value: 40909.194
              },
              {
                name: 'Kyrgyzstan',
                value: 5334.223
              },
              {
                name: 'Cambodia',
                value: 14364.931
              },
              {
                name: 'South Korea',
                value: 51452.352
              },
              {
                name: 'Kosovo',
                value: 97.743
              },
              {
                name: 'Kuwait',
                value: 2991.58
              },
              {
                name: 'Laos',
                value: 6395.713
              },
              {
                name: 'Lebanon',
                value: 4341.092
              },
              {
                name: 'Liberia',
                value: 3957.99
              },
              {
                name: 'Libya',
                value: 6040.612
              },
              {
                name: 'Sri Lanka',
                value: 20758.779
              },
              {
                name: 'Lesotho',
                value: 2008.921
              },
              {
                name: 'Lithuania',
                value: 3068.457
              },
              {
                name: 'Luxembourg',
                value: 507.885
              },
              {
                name: 'Latvia',
                value: 2090.519
              },
              {
                name: 'Morocco',
                value: 31642.36
              },
              {
                name: 'Moldova',
                value: 103.619
              },
              {
                name: 'Madagascar',
                value: 21079.532
              },
              {
                name: 'Mexico',
                value: 117886.404
              },
              {
                name: 'Macedonia',
                value: 507.885
              },
              {
                name: 'Mali',
                value: 13985.961
              },
              {
                name: 'Myanmar',
                value: 51931.231
              },
              {
                name: 'Montenegro',
                value: 620.078
              },
              {
                name: 'Mongolia',
                value: 2712.738
              },
              {
                name: 'Mozambique',
                value: 23967.265
              },
              {
                name: 'Mauritania',
                value: 3609.42
              },
              {
                name: 'Malawi',
                value: 15013.694
              },
              {
                name: 'Malaysia',
                value: 28275.835
              },
              {
                name: 'Namibia',
                value: 2178.967
              },
              {
                name: 'New Caledonia',
                value: 246.379
              },
              {
                name: 'Niger',
                value: 15893.746
              },
              {
                name: 'Nigeria',
                value: 159707.78
              },
              {
                name: 'Nicaragua',
                value: 5822.209
              },
              {
                name: 'Netherlands',
                value: 16615.243
              },
              {
                name: 'Norway',
                value: 4891.251
              },
              {
                name: 'Nepal',
                value: 26846.016
              },
              {
                name: 'New Zealand',
                value: 4368.136
              },
              {
                name: 'Oman',
                value: 2802.768
              },
              {
                name: 'Pakistan',
                value: 173149.306
              },
              {
                name: 'Panama',
                value: 3678.128
              },
              {
                name: 'Peru',
                value: 29262.83
              },
              {
                name: 'Philippines',
                value: 93444.322
              },
              {
                name: 'Papua New Guinea',
                value: 6858.945
              },
              {
                name: 'Poland',
                value: 38198.754
              },
              {
                name: 'Puerto Rico',
                value: 3709.671
              },
              {
                name: 'North Korea',
                value: 1.468
              },
              {
                name: 'Portugal',
                value: 10589.792
              },
              {
                name: 'Paraguay',
                value: 6459.721
              },
              {
                name: 'Qatar',
                value: 1749.713
              },
              {
                name: 'Romania',
                value: 21861.476
              },
              {
                name: 'Russia',
                value: 21861.476
              },
              {
                name: 'Rwanda',
                value: 10836.732
              },
              {
                name: 'Western Sahara',
                value: 514.648
              },
              {
                name: 'Saudi Arabia',
                value: 27258.387
              },
              {
                name: 'Sudan',
                value: 35652.002
              },
              {
                name: 'South Sudan',
                value: 9940.929
              },
              {
                name: 'Senegal',
                value: 12950.564
              },
              {
                name: 'Solomon Islands',
                value: 526.447
              },
              {
                name: 'Sierra Leone',
                value: 5751.976
              },
              {
                name: 'El Salvador',
                value: 6218.195
              },
              {
                name: 'Somaliland',
                value: 9636.173
              },
              {
                name: 'Somalia',
                value: 9636.173
              },
              {
                name: 'Republic of Serbia',
                value: 3573.024
              },
              {
                name: 'Suriname',
                value: 524.96
              },
              {
                name: 'Slovakia',
                value: 5433.437
              },
              {
                name: 'Slovenia',
                value: 2054.232
              },
              {
                name: 'Sweden',
                value: 9382.297
              },
              {
                name: 'Swaziland',
                value: 1193.148
              },
              {
                name: 'Syria',
                value: 7830.534
              },
              {
                name: 'Chad',
                value: 11720.781
              },
              {
                name: 'Togo',
                value: 6306.014
              },
              {
                name: 'Thailand',
                value: 66402.316
              },
              {
                name: 'Tajikistan',
                value: 7627.326
              },
              {
                name: 'Turkmenistan',
                value: 5041.995
              },
              {
                name: 'East Timor',
                value: 10016.797
              },
              {
                name: 'Trinidad and Tobago',
                value: 1328.095
              },
              {
                name: 'Tunisia',
                value: 10631.83
              },
              {
                name: 'Turkey',
                value: 72137.546
              },
              {
                name: 'United Republic of Tanzania',
                value: 44973.33
              },
              {
                name: 'Uganda',
                value: 33987.213
              },
              {
                name: 'Ukraine',
                value: 46050.22
              },
              {
                name: 'Uruguay',
                value: 3371.982
              },
              {
                name: 'United States',
                value: 312247.116
              },
              {
                name: 'Uzbekistan',
                value: 27769.27
              },
              {
                name: 'Venezuela',
                value: 236.299
              },
              {
                name: 'Vietnam',
                value: 89047.397
              },
              {
                name: 'Vanuatu',
                value: 236.299
              },
              {
                name: 'West Bank',
                value: 13.565
              },
              {
                name: 'Yemen',
                value: 22763.008
              },
              {
                name: 'South Africa',
                value: 51452.352
              },
              {
                name: 'Zambia',
                value: 13216.985
              },
              {
                name: 'Zimbabwe',
                value: 13076.978
              }
        ],
       
    }],
   
  }],
    "date": ["4.4", "4.5", "4.6"]
};

const totalConfirm = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            inverse: false,
            playInterval: 3000,
            left:"center",
            width:"90%",
            top:'60%',
            loop: true,
            symbolSize: 8,

            label: {
                normal: {
                    textStyle: {
                        color: '#1C1C1C'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#CD3700'
                    }
                }
            },
            tooltip: {
                formatter: liaoning.date
            },
           
            data: liaoning.date,
           
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            top: 300,
            showLabel: !0,
            itemGap:1,
            itemWidth: 7,
            itemHeight:7,
            textStyle: {
                fontSize: '8',
                color:'#000'
            },
            pieces: [{
                gt: 1000,
                label: "> 1000 人",
                color: "#73240D"
            }, 
                {
                gte: 100,
                lte:1000,
                label: "100-1000 人",
                color: "#BD430A"
            }, {
                gte: 10,
                lte: 100,
                label: "10 - 100 人",
                color: "#ff5428"
            }, {
                gte: 1,
                lt: 10,
                label: "1 - 9 人",
                color: "#ff8c71"
            }, {
                value: 0,
                color: "#ffffff"
            }],
            show: !0
        },
        title:{
            text:"世界疫情地图-累计确诊",
            top:'5%',
            left:'center',
            textStyle: {
                color: '#2D3E53',
                fontSize: 18,
    
            },
        },
        tooltip: {
            triggerOn: "click",      
            formatter:function(e,t,n){
                var html = '';
                html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
                html+='<button  οnclick="">详情</button>';      
                return html;
            },
            
        },
        
        geo: {
            map: "world",
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.23,
            top: 120,
            label: {
                normal: {
                    show:!1,
                    fontSize: "6",
                    color: "rgba(0,0,0,0.7)"
                }
            },
            itemStyle: {
                normal: {
                    //shadowBlur: 50,
                    //shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                }
            }
        },
        series: [],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    
    options: liaoning.options

}

const newConfirm = {
  baseOption: {
      timeline: {
          axisType: 'category',
          autoPlay: true,
          inverse: false,
          playInterval: 3000,
          left:"center",
          width:"90%",
          top:'60%',
          loop: true,
          symbolSize: 8,

          label: {
              normal: {
                  textStyle: {
                      color: '#1C1C1C'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#CD3700'
                  }
              }
          },
          tooltip: {
              formatter: liaoning.date
          },
         
          data: liaoning.date,
         
      },
      visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          top: 300,
          showLabel: !0,
          itemGap:1,
          itemWidth: 7,
          itemHeight:7,
          textStyle: {
              fontSize: '8',
              color:'#000'
          },
          pieces: [{
              gt: 1000,
              label: "> 1000 人",
              color: "#73240D"
          }, 
              {
              gte: 100,
              lte:1000,
              label: "100-1000 人",
              color: "#BD430A"
          }, {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428"
          }, {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71"
          }, {
              value: 0,
              color: "#ffffff"
          }],
          show: !0
      },
      title:{
          text:"世界疫情地图-新增确诊",
          top:'5%',
          left:'center',
          textStyle: {
              color: '#2D3E53',
              fontSize: 18,
  
          },
      },
      tooltip: {
          triggerOn: "click",      
          formatter:function(e,t,n){
              var html = '';
              html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
              html+='<button  οnclick="">详情</button>';      
              return html;
          },
          
      },
      
      geo: {
          map: "world",
          roam: !1,
          scaleLimit: {
              min: 1,
              max: 2
          },
          zoom: 1.23,
          top: 120,
          label: {
              normal: {
                  show:!1,
                  fontSize: "6",
                  color: "rgba(0,0,0,0.7)"
              }
          },
          itemStyle: {
              normal: {
                  //shadowBlur: 50,
                  //shadowColor: 'rgba(0, 0, 0, 0.2)',
                  borderColor: "rgba(0, 0, 0, 0.2)"
              },
              emphasis: {
                  areaColor: "#f2d5ad",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  borderWidth: 0
              }
          }
      },
      series: [],
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut'
  },
  
  options: liaoning.options

}

const totalCure = {
  baseOption: {
      timeline: {
          axisType: 'category',
          autoPlay: true,
          inverse: false,
          playInterval: 3000,
          left:"center",
          width:"90%",
          top:'60%',
          loop: true,
          symbolSize: 8,

          label: {
              normal: {
                  textStyle: {
                      color: '#1C1C1C'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#CD3700'
                  }
              }
          },
          tooltip: {
              formatter: liaoning.date
          },
         
          data: liaoning.date,
         
      },
      visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          top: 300,
          showLabel: !0,
          itemGap:1,
          itemWidth: 7,
          itemHeight:7,
          textStyle: {
              fontSize: '8',
              color:'#000'
          },
          pieces: [{
              gt: 1000,
              label: "> 1000 人",
              color: "#73240D"
          }, 
              {
              gte: 100,
              lte:1000,
              label: "100-1000 人",
              color: "#BD430A"
          }, {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428"
          }, {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71"
          }, {
              value: 0,
              color: "#ffffff"
          }],
          show: !0
      },
      title:{
          text:"世界疫情地图-累计治愈",
          top:'5%',
          left:'center',
          textStyle: {
              color: '#2D3E53',
              fontSize: 18,
  
          },
      },
      tooltip: {
          triggerOn: "click",      
          formatter:function(e,t,n){
              var html = '';
              html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
              html+='<button  οnclick="">详情</button>';      
              return html;
          },
          
      },
      
      geo: {
          map: "world",
          roam: !1,
          scaleLimit: {
              min: 1,
              max: 2
          },
          zoom: 1.23,
          top: 120,
          label: {
              normal: {
                  show:!1,
                  fontSize: "6",
                  color: "rgba(0,0,0,0.7)"
              }
          },
          itemStyle: {
              normal: {
                  //shadowBlur: 50,
                  //shadowColor: 'rgba(0, 0, 0, 0.2)',
                  borderColor: "rgba(0, 0, 0, 0.2)"
              },
              emphasis: {
                  areaColor: "#f2d5ad",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  borderWidth: 0
              }
          }
      },
      series: [],
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut'
  },
  
  options: liaoning.options

}


const totalDie = {
  baseOption: {
      timeline: {
          axisType: 'category',
          autoPlay: true,
          inverse: false,
          playInterval: 3000,
          left:"center",
          width:"90%",
          top:'60%',
          loop: true,
          symbolSize: 8,

          label: {
              normal: {
                  textStyle: {
                      color: '#1C1C1C'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#CD3700'
                  }
              }
          },
          tooltip: {
              formatter: liaoning.date
          },
         
          data: liaoning.date,
         
      },
      visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          top: 300,
          showLabel: !0,
          itemGap:1,
          itemWidth: 7,
          itemHeight:7,
          textStyle: {
              fontSize: '8',
              color:'#000'
          },
          pieces: [{
              gt: 1000,
              label: "> 1000 人",
              color: "#73240D"
          }, 
              {
              gte: 100,
              lte:1000,
              label: "100-1000 人",
              color: "#BD430A"
          }, {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428"
          }, {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71"
          }, {
              value: 0,
              color: "#ffffff"
          }],
          show: !0
      },
      title:{
          text:"世界疫情地图-累计死亡",
          top:'5%',
          left:'center',
          textStyle: {
              color: '#2D3E53',
              fontSize: 18,
  
          },
      },
      tooltip: {
          triggerOn: "click",      
          formatter:function(e,t,n){
              var html = '';
              html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
              html+='<button  οnclick="">详情</button>';      
              return html;
          },
          
      },
      
      geo: {
          map: "world",
          roam: !1,
          scaleLimit: {
              min: 1,
              max: 2
          },
          zoom: 1.23,
          top: 120,
          label: {
              normal: {
                  show:!1,
                  fontSize: "6",
                  color: "rgba(0,0,0,0.7)"
              }
          },
          itemStyle: {
              normal: {
                  //shadowBlur: 50,
                  //shadowColor: 'rgba(0, 0, 0, 0.2)',
                  borderColor: "rgba(0, 0, 0, 0.2)"
              },
              emphasis: {
                  areaColor: "#f2d5ad",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  borderWidth: 0
              }
          }
      },
      series: [],
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut'
  },
  
  options: liaoning.options

}
 
export default function WorldMap() {
  const options = [newConfirm, totalConfirm, totalCure, totalDie];

  let chart;

  const onRef = ref => {
    if (ref) {
      chart = ref;
    }
  };

  return (
      <View>
        <SegmentedControl
            values={['新增确诊', '累计确诊', '累计治愈', '累计死亡']}
            onChange={e => {
              chart.setOption(options[e.nativeEvent.selectedSegmentIndex]);
            }}
            style={{ marginLeft: 50, marginRight: 50}}
        />
        <View style={{ height: 700 }} >
          <ECharts ref={onRef} option={options[0]} />
        </View>
      </View>
  );
}