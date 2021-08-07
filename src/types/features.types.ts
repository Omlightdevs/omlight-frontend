export interface IFeaturesProps{
    websiteName: string
    websiteLogo: string
    description: string
    contact: {
        type: string
        name: string
        details:string

    }[

    ]
    shopAddress: string
    brands: {
        title:string
    }[]
}