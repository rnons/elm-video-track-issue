module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)


main =
    program
        { init = init, view = view, update = update, subscriptions = \_ -> Sub.none }


type Msg
    = SelectLang String


type alias Model =
    { selected : String
    }


init =
    ( Model "en.vtt", Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SelectLang code ->
            ( { model | selected = code }, Cmd.none )


view model =
    let
        videoSrc =
            "https://download.ted.com/talks/RandallMunroe_2014-320k.mp4"
    in
        div []
            [ video [ controls True ]
                [ source [ src videoSrc ] []
                , track [ src model.selected, default True ] []
                ]
            , div []
                [ button [ onClick (SelectLang "en.vtt") ] [ text "en" ]
                , button [ onClick (SelectLang "zh-cn.vtt") ] [ text "zh-cn" ]
                ]
            ]
