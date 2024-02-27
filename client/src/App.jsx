import { useState } from "react";
import "./App.css";
import ModalDelete from "./components/ModalDelete";
import ModalBlock from "./components/ModalBlock";
import Form from "./components/Form";
import Table from "./layout/Table";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <>
        <div className="w-[80%] m-auto mt-4 h-[100vh]">
          <main className="main">
            <header className="d-flex justify-content-between mb-3">
              <h3>Nhân viên</h3>
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary"
              >
                Thêm mới nhân viên
              </button>
            </header>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
              <input
                style={{ width: 350 }}
                type="text"
                className="form-control"
                placeholder="Tìm kiếm theo email"
              />
              <i className="fa-solid fa-arrows-rotate" title="Refresh" />
            </div>
            {/* Danh sách nhân viên */}
            <Table></Table>
          </main>
        </div>

        {/* Form thêm mới nhân viên */}
        {showForm && <Form setShowForm={setShowForm}></Form>}
      </>
    </>
  );
}

export default App;