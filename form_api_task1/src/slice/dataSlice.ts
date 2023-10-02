import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../api/httpService";
export interface DataDetails {
  id?: string;
  attributes: Attributes;
}

interface Profile {
  education?: object;
  experience?: object;
  resumse?: object;
  profileQuestions: Question[];
}

interface Attributes {
  coverImage?: string;
  customisedQuestions: Question[];
  profile: Profile;
}

export interface Question {
  id: string;
  choices: string[];
  disqualify: boolean;
  maxChoice: number;
  other: boolean;
  question: string;
  type: string;
}

export interface InitialUserState {
  data: DataDetails;

  error: string;
}

interface RequestBody {
  data: DataDetails
}

const initialState: InitialUserState = {
  data: {
    attributes: {
      coverImage: "",
      customisedQuestions: [],
      profile: {
        education: {},
        experience: {},
        resumse: {},
        profileQuestions: [],
      },
    },
  },

  error: "",
};

export const createQuestion = createAsyncThunk(
  "allData/addQuestion",
  async (payload: Record<string, string>, thunkAPI) => {
    try {
      const response = await axios.post("/", payload);

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.request) {
        return thunkAPI.rejectWithValue("Network Error");
      }
      if (error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);


export const getData = createAsyncThunk(
  "allData/getDatas",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "/api/266.4495344352841/programs/non/application-form"
      );
      console.log(response.data.data);

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.request) {
        return thunkAPI.rejectWithValue("Network Error");
      }
      if (error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const updateData = createAsyncThunk(
  "allData/updateDatas",
  async (payload: RequestBody, thunkAPI) => {
    try {
      const response = await axios.put(
        "/api/607.1631270676841/programs/non/application-form", payload
      );
      console.log(response.data);

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.request) {
        return thunkAPI.rejectWithValue("Network Error");
      }
      if (error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    questionSuccess: (state, action) => {
      state.data = action.payload.data;
    },
    addProfileQuestion: (state, action) => {
      state.data.attributes.profile.profileQuestions.push(action.payload);
    },
    editProfileQuestion: (state, action) => {
      state.data.attributes.profile.profileQuestions =
        state.data.attributes.profile.profileQuestions.map((question) => {
          if (question.id === action.payload.id) {
            question = action.payload;
          }
          return question;
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createQuestion.pending, (state) => {
      state.error = "";
    });
    builder.addCase(createQuestion.fulfilled, (state, action) => {
      state.data = action.payload.data;
      toast(action.payload.message);
      state.error = "";
    });
    builder.addCase(createQuestion.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getData.pending, (state) => {
      state.error = "";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.error = "";
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.data = {
        attributes: {
          coverImage: "http://",
          customisedQuestions: [],
          profile: {
            education: {},
            experience: {},
            resumse: {},
            profileQuestions: [],
          },
        },
      };
      state.error = action.payload as string;
    });
  },
});

// Action creators are generated for each case reducer function
export const { editProfileQuestion, questionSuccess, addProfileQuestion } =
  dataSlice.actions;

export default dataSlice.reducer;
