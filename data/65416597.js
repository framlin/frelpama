module.exports =  [
    {
        name: "STM32F429-Discovery (STM32F429I-DISC1)",
        description: [
            {
                type: "text",
                value: "STM32 Discovery-Board von ST"
            },
            {
                type: "link",
                target: "http://www.st.com/en/evaluation-tools/32f429idiscovery.html",
                value: "ST Product-Page"
            }
        ],
        partials: [
            {
                partial: "MicroController",
                name: "STM32F429ZIT6U",
                sections: [
                    {
                        section: "Documentation",
                        entries: [
                            {
                                type: 'link',
                                target: "http://www.st.com/en/microcontrollers/stm32f429zi.html",
                                value: "Product-Page"
                            },
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/user_manual/2f/71/ba/b8/75/54/47/cf/DM00105879.pdf/files/DM00105879.pdf/jcr:content/translations/en.DM00105879.pdf",
                                value: "UM1725 - STM32F4 User Manual: Description of STM32F4xx HAL drivers (PDF)"
                            },
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/datasheet/03/b4/b2/36/4c/72/49/29/DM00071990.pdf/files/DM00071990.pdf/jcr:content/translations/en.DM00071990.pdf",
                                value: "DS9405 - Product Specification (PDF)"
                            },
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/reference_manual/3d/6d/5a/66/b4/99/40/d4/DM00031020.pdf/files/DM00031020.pdf/jcr:content/translations/en.DM00031020.pdf",
                                value: "RM0090 - Reference Manual (PDF)"
                            },
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/programming_manual/6c/3a/cb/e7/e4/ea/44/9b/DM00046982.pdf/files/DM00046982.pdf/jcr:content/translations/en.DM00046982.pdf",
                                value: "PM0214  - Programming Manual (PDF)"
                            }
                        ]
                    },
                    {
                        section: "Libraries",
                        entries: [
                            {
                                type: 'link',
                                target: "http://mikrocontroller.bplaced.net/wordpress/?page_id=2736",
                                value: "Blog: Komplette-Library-Liste (STM32F429)"
                            }
                        ]
                    }

                ]
            },
            {
                partial: "Display",
                name: '2.4" QVGA TFT LCD - Saef Technology Limited, MODULE NO SF-TC240T-9370A-T',
                sections: [
                    {
                        section: "Documentation",
                        entries: [
                            {
                                type: 'link',
                                target: "http://galaxy.agh.edu.pl/~amrozek/TM/SF_TC240T_9370A_T.pdf",
                                value: "Spezification (PDF)"
                            }]
                    },
                    {
                        section: "Libraries",
                        entries: [
                            {
                                type: 'link',
                                target: "http://www.st.com/content/st_com/en/products/embedded-software/mcus-embedded-software/stm32-embedded-software/stm32-3rd-party-embedded-software/dra-touchgfx.html",
                                value: "TARA-Embd-Wizard"
                            }
                        ]
                    }
                ]
            },
            {
                partial: "TFT Controller",
                name: 'ILI9341',
                sections: [
                    {
                        section: "Documentation",
                        entries: [
                            {
                                type: 'link',
                                target: "https://cdn-shop.adafruit.com/datasheets/ILI9341.pdf",
                                value: "Datasheet (Adafruit)"
                            }]
                    },
                    {
                        section: "Libraries",
                        entries: [
                            {
                                type: 'link',
                                target: "hhttp://mikrocontroller.bplaced.net/wordpress/?page_id=2753",
                                value: "Blog: 07 -L CD ILI9341 - Library (STM32F429)"
                            }
                        ]
                    }
                ]
            },
            {
                partial: "Touch Controller",
                name: 'STMPE811',
                sections: [
                    {
                        section: "Documentation",
                        entries: [
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/datasheet/d3/4a/58/38/4f/fa/46/2d/CD00186725.pdf/files/CD00186725.pdf/jcr:content/translations/en.CD00186725.pdf",
                                value: "ST - Datasheet (PDF)"
                            }]
                    },
                    {
                        section: "Libraries",
                        entries: [
                            {
                                type: 'link',
                                target: "http://mikrocontroller.bplaced.net/wordpress/?page_id=2877",
                                value: "Blog: 15 - Touch STMPE811 - Library (STM32F429)"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "ST NUCLEO-F411RE",
        description: [
            {
                type: "text",
                value: "STM32 F4 Nucleo-Board von ST"
            },
            {
                type: "link",
                target: "http://www.st.com/en/evaluation-tools/nucleo-f411re.html",
                value: "ST Product-Page"
            }
        ],
        partials: [
            {
                partial: "MicroController",
                name: 'STM32F411RE',
                sections: [
                    {
                        section: "User Manuals",
                        entries: [
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/user_manual/98/2e/fa/4b/e0/82/43/b7/DM00105823.pdf/files/DM00105823.pdf/jcr:content/translations/en.DM00105823.pdf",
                                value: "UM1724 User manual: STM32 Nucleo-64 board (PDF)"
                            },
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/user_manual/1b/03/1b/b4/88/20/4e/cd/DM00105928.pdf/files/DM00105928.pdf/jcr:content/translations/en.DM00105928.pdf",
                                value: "UM1727 User manual: Getting started with STM32 Nucleo board software development tools (PDF)"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "ST NUCLEO-F401RE",
        description: [
            {
                type: "text",
                value: "STM32 F4 Nucleo-Board von ST"
            },
            {
                type: "link",
                target: "http://www.st.com/en/evaluation-tools/nucleo-f401re.html",
                value: "ST Product-Page"
            }
        ],
        partials: [
            {
                partial: "MicroController",
                name: 'STM32F401RE',
                sections: [
                    {
                        section: "User Manuals",
                        entries: [
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/user_manual/98/2e/fa/4b/e0/82/43/b7/DM00105823.pdf/files/DM00105823.pdf/jcr:content/translations/en.DM00105823.pdf",
                                value: "UM1724 User manual: STM32 Nucleo-64 board (PDF)"
                            },
                            {
                                type: 'link',
                                target: "http://www.st.com/content/ccc/resource/technical/document/user_manual/1b/03/1b/b4/88/20/4e/cd/DM00105928.pdf/files/DM00105928.pdf/jcr:content/translations/en.DM00105928.pdf",
                                value: "UM1727 User manual: Getting started with STM32 Nucleo board software development tools (PDF)"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {rfid: '65416597'}
];
