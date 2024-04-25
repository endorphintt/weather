export interface CityItem {
    name: string
    local_names: any
    lat: number
    lon: number
    country: string
    state: string
}

export interface DayWeather {
    cord: {
        lon: number
        lat: number
    }
    weather: {
        id: number
        main: string
        description: string
        icon: string
    }[]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

export interface CityCord {
    lat: number
    lon: number
    name: string
}

export interface TwoWeeksForecastInterface {
    city: {
        id: number
        name: string
        coord: {
            lon: number
            lat: number
        }
        country: string
        population: number
        timezone: number
    }
    cod: string
    message: number
    cnt: number
    list: {
        dt: number
        sunrise: number
        sunset: number
        temp: {
            day: number
            min: number
            max: number
            night: number
            eve: number
            morn: number
        }
        feels_like: {
            day: number
            night: number
            eve: number
            morn: number
        }
        pressure: number
        humidity: number
        weather: {
            id: number
            main: string
            description: string
            icon: string
        }[]
        speed: number
        deg: number
        gust: number
        clouds: number
        pop: number
        rain: number
    }[]
}

export interface FourDaysWeatherForecast {
    cod: string
    message: number
    cnt: number
    list: {
        dt: number
        main: {
            temp: number
            feels_like: number
            temp_min: number
            temp_max: number
            pressure: number
            sea_level: number
            grnd_level: number
            humidity: number
            temp_kf: number
        }
        weather: {
            id: number
            main: string
            description: string
            icon: string
        }[]
        clouds: {
            all: number
        }
        wind: {
            speed: number
            deg: number
            gust: number
        }
        visibility: number
        pop: number
        rain?: {
            '1h': number
        }
        sys: {
            pod: string
        }
        dt_txt: string
    }[]
    city: {
        id: number
        name: string
        coord: {
            lat: number
            lon: number
        }
        country: string
        population: number
        timezone: number
        sunrise: number
        sunset: number
    }
}
